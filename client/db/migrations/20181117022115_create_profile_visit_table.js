
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profile_visits', function (table) {
        table.increments('id').primary();
        table.date('date').notNull();

        table.integer('artist_id').notNull();
        table.foreign('artist_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profile_visits');
};
