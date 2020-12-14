import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('tags', (table) => {
        table.increments('id').primary();
        table.string('key').index();
        table.string('normalized_key').index();
        table.string('normalized_value').index();
        table.string('value').index();
    });
};

export async function down(knex: Knex) {
    return await knex.schema.dropTable('tags');
};
