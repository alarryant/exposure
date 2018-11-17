
exports.up = function(knex, Promise) {
    return knex.schema.createTable('package_tiers', function (table) {
        table.increments('id');
        table.string('tier_level').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('package_tiers');
};
