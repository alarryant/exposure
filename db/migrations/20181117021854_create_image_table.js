
exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', function (table) {
        table.increments('id')
        table.text('title').notNull();
        table.text('description').notNull();
        table.string('featured?').notNull();
        table.text('category').notNull();
        
        table.integer('image_owner').notNull();
        table.foreign('image_owner').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images');
};
