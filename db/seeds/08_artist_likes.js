exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('artist_likes').insert(
      { client_id: 2,
        artist_id: 9
      }),
    knex('artist_likes').insert(
      { client_id: 7,
        artist_id: 9
      }),
    knex('artist_likes').insert(
      { client_id: 6,
        artist_id: 9
      }),
    knex('artist_likes').insert(
      { client_id: 5,
        artist_id: 9
      }),
    knex('artist_likes').insert(
      { client_id: 4,
        artist_id: 9
      }),
    knex('artist_likes').insert(
      { client_id: 3,
        artist_id: 9
      })
  ]);
};