import { Model } from 'src/objection';

export class Postmortem extends Model {
    id: string;
    link: string;
    published_on: Date;
    submitted_by: string;
    submitted_on: Date;
    tags: import('./tag').Tag[];

    static get relationMappings() {
        return {
            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: require('./tag').Tag,
                join: {
                    from: 'postmortems.id',
                    through: {
                        from: 'postmortems_tags.postmortem_id',
                        to: 'postmortems_tags.tag_id',
                    },
                    to: 'tags.id',
                },
            },
        };
    }

    static get tableName() {
        return 'postmortems';
    }

    static get useLimitInFirst() {
        return true;
    }
}
