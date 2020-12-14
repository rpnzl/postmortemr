import Knex from 'knex';
import { readFileSync } from 'fs';
import { kebabCase } from 'lodash';
import { basename, resolve } from 'path';
import { parse } from 'yaml';
import glob from 'glob';

export async function seed(knex: Knex) {
    const contentPath = resolve(__dirname, '..', '..', '..', 'content');
    const postmortems = glob.sync(`${contentPath}/*.yml`);

    for (const postmortem of postmortems) {
        const contents = readFileSync(postmortem).toString();
        const data = parse(contents);

        const tagIds = [];

        if (data.tags) {
            for (const tag of data.tags) {
                const [key, value] = tag.split(':');

                const existingTags = await knex
                    .select()
                    .from('tags')
                    .where('key', key)
                    .where('value', value)
                    .limit(1);

                if (existingTags.length) {
                    tagIds.push(existingTags[0].id);
                } else {
                    const [ tagId ] = await knex.table('tags')
                        .insert({
                            key,
                            normalized_key: kebabCase(key.toLowerCase()),
                            normalized_value: kebabCase(value.toLowerCase()),
                            value,
                        });
    
                    tagIds.push(tagId);
                }
            }
        }

        const [ postmortemId ] = await knex.table('postmortems')
            .insert({
                link: data.link,
                slug: basename(postmortem),
                published_on: data.published_on,
                submitted_by: data.submitted_by,
                submitted_on: data.submitted_on,
                title: data.title,
            });

        for (const tagId of tagIds) {
            await knex.table('postmortems_tags')
                .insert({
                    postmortem_id: postmortemId,
                    tag_id: tagId,
                });
        }
    }
};
