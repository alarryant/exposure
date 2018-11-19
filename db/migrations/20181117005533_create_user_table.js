
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('first_name').notNull();
        table.string('last_name').notNull();
        table.string('email').notNull();
        table.string('password').notNull();
        table.text('profile_image');
        table.text('website_url');
        table.text('instagram_url');
        table.text('facebook_url');
        table.text('twitter_url');
        table.string('location');
        table.integer('user_type_id').notNull();

        table.foreign('user_type_id').references('id').inTable('user_types').onDelete('CASCADE');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
