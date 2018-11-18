
exports.up = function(knex, Promise) {
    return knex.schema.createTable('price_packages', function (table) {
        table.increments('id').primary();

        table.integer('tier').notNull();
        table.integer('price').notNull();
        table.integer('user_id').notNull();

        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('price_packages');
};
