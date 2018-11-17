
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', function (table) {
        table.increments('id')
        table.text('name').notNull();
        table.text('description').notNull();
        table.date('event_date').notNull();
        table.integer('price').notNull();
        table.text('location').notNull();
        table.string('artist_accepted').notNull();
        
        table.integer('creator_id').notNull();
        table.foreign('creator_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events');
};
