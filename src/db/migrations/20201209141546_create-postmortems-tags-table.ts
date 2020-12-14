import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('postmortems_tags', (table) => {
        table.increments('id').primary();
        table.integer('postmortem_id').references('postmortems.id');
        table.integer('tag_id').references('tags.id');
    });
};

export async function down(knex: Knex) {
    return await knex.schema.dropTable('postmortems_tags');
};
