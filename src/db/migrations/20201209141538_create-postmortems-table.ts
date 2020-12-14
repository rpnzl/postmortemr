import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('postmortems', (table) => {
        table.increments('id').primary();
        table.string('link');
        table.string('slug').index();
        table.date('published_on').index();
        table.string('submitted_by').index();
        table.date('submitted_on');
        table.string('title');
    });
};

export async function down(knex: Knex) {
    return await knex.schema.dropTable('postmortems');
};
