exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('event_interests').insert(
      { eventref_id: 1,
        artist_id: 1
      }),
    knex('event_interests').insert(
      { eventref_id: 1,
        artist_id: 2
      }),
    knex('event_interests').insert(
      { eventref_id: 2,
        artist_id: 3
      }),
    knex('event_interests').insert(
      { eventref_id: 3,
        artist_id: 4
      }),
    knex('event_interests').insert(
      { eventref_id: 4,
        artist_id: 2
      }),
    knex('event_interests').insert(
      { eventref_id: 4,
        artist_id: 6
      }),
    knex('event_interests').insert(
      { eventref_id: 4,
        artist_id: 5
      }),
    knex('event_interests').insert(
      { eventref_id: 5,
        artist_id: 5
      })
  ]);
};