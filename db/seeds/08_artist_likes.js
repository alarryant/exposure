exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('artist_likes').insert(
      { client_id: 8,
        artist_id: 1
      }),
    knex('artist_likes').insert(
      { client_id: 7,
        artist_id: 2
      }),
    knex('artist_likes').insert(
      { client_id: 7,
        artist_id: 3
      }),
    knex('artist_likes').insert(
      { client_id: 7,
        artist_id: 4
      }),
    knex('artist_likes').insert(
      { client_id: 6,
        artist_id: 5
      }),
    knex('artist_likes').insert(
      { client_id: 6,
        artist_id: 5
      })
  ]);
};