exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('event_interests').insert(
      { id: 1,
        event_id: 1,
        artist_id: 1
      }),
    knex('event_interests').insert(
      { id: 2,
        event_id: 1,
        artist_id: 2
      }),
    knex('event_interests').insert(
      { id: 3,
        event_id: 2,
        artist_id: 3
      }),
    knex('event_interests').insert(
      { id: 4,
        event_id: 3,
        artist_id: 4
      }),
    knex('event_interests').insert(
      { id: 5,
        event_id: 4,
        artist_id: 2
      }),
    knex('event_interests').insert(
      { id: 6,
        event_id: 4,
        artist_id: 6
      }),
    knex('event_interests').insert(
      { id: 7,
        event_id: 4,
        artist_id: 5
      }),
    knex('event_interests').insert(
      { id: 8,
        event_id: 5,
        artist_id: 5
      })
  ]);
};