
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', function (table) {
        table.increments('review_id').primary();
        table.integer('rating').notNull();
        table.text('description').notNull();
        table.integer('artist_id').notNull();

        table.integer('user_id').notNull();
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
