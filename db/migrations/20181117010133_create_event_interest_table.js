
exports.up = function(knex, Promise) {
    return knex.schema.createTable('event_interests', function (table) {
        table.increments('id').primary();

        table.integer('eventref_id').notNull();
        table.foreign('eventref_id').references('event_id').inTable('events').onDelete('CASCADE');
        table.integer('artist_id').notNull();
        table.foreign('artist_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('event_interests');
};
