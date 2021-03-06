
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', function (table) {
        table.increments('event_id').primary();
        table.text('name').notNull();
        table.text('description').notNull();
        table.date('event_date').notNull();
        table.integer('price').notNull();
        table.text('event_location').notNull();
        table.integer('artist_accepted');
        table.timestamps(true, true);

        table.integer('creator_id').notNull();
        table.foreign('creator_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('artist_accepted').references('id').inTable('users').onDelete('CASCADE');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events');
};
