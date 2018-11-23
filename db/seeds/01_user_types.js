exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('user_types').insert(
      { type: 'artist'
      }),
    knex('user_types').insert(
      { type: 'client'
      })
  ]);
};