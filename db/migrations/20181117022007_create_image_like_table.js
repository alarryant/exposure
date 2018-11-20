
exports.up = function(knex, Promise) {
    return knex.schema.createTable('image_likes', function (table) {
        table.increments('id').primary();

        table.integer('client_id').notNull();
        table.foreign('client_id').references('id').inTable('users').onDelete('CASCADE');

        table.integer('image_id').notNull();
        table.foreign('image_id').references('id').inTable('images').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('image_likes');
};
