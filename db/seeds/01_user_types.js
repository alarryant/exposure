exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('user_types').insert(
      { id: 1,
        type: 'artist'
      }),
    knex('user_types').insert(
      { id: 2,
        type: 'client'
      })
  ]);
};