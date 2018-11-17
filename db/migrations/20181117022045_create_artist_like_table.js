
exports.up = function(knex, Promise) {
    return knex.schema.createTable('artist_likes', function (table) {
        table.increments('id')
        table.integer('artist_id').notNull();
        table.integer('client_id').notNull();
        table.foreign('client_id').references('id').inTable('users').onDelete('CASCADE');
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artist_likes');
};
