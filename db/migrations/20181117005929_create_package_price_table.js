
exports.up = function(knex, Promise) {
    return knex.schema.createTable('price_packages', function (table) {
        table.increments('id');

        table.integer('tier').notNull();
        table.integer('user').notNull();
        table.integer('price').notNull();

        table.foreign('user').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('price_packages');
};
