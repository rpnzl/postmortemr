import { Model } from 'src/objection';

export class Tag extends Model {
    id: string;
    key: string;
    postmortems: import('./postmortem').Postmortem[];
    normalized_key: string;
    normalized_value: string;
    tag: string;
    value: string;

    static get relationMappings() {
        return {
            postmortems: {
                relation: Model.ManyToManyRelation,
                modelClass: require('./postmortem').Postmortem,
                join: {
                    from: 'tags.id',
                    through: {
                        from: 'postmortems_tags.tag_id',
                        to: 'postmortems_tags.postmortem_id',
                    },
                    to: 'postmortems.id',
                },
            },
        };
    }

    static get tableName() {
        return 'tags';
    }

    static get useLimitInFirst() {
        return true;
    }
}
