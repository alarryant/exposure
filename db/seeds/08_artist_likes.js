exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('artist_likes').insert(
      { id: 1,
        client_id: 8,
        artist_id: 1
      }),
    knex('artist_likes').insert(
      { id: 2,
        client_id: 7,
        artist_id: 2
      }),
    knex('artist_likes').insert(
      { id: 3,
        client_id: 7,
        artist_id: 3
      }),
    knex('artist_likes').insert(
      { id: 4,
        client_id: 7,
        artist_id: 4
      }),
    knex('artist_likes').insert(
      { id: 5,
        client_id: 6,
        artist_id: 5
      }),
    knex('artist_likes').insert(
      { id: 6,
        client_id: 6,
        artist_id: 5
      })
  ]);
};