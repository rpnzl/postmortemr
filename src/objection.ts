import { Model } from 'objection';
import { knex } from 'src/knex';

Model.knex(knex);

export {
    Model,
};
