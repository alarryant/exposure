
exports.up = function(knex, Promise) {
    return knex.schema.createTable('availabilities', function (table) {
        table.increments('id')
        table.date('start_date').notNull();
        table.date('end_date').notNull();
        
        table.integer('artist_id').notNull();
        table.foreign('artist_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('availabilities');
};
