
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_types', function (table) {
        table.increments('id').primary();
        table.string('type').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_types');
};
