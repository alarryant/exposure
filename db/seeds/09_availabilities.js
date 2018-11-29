exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('availabilities').insert(
      { date: new Date(2018, 10, 28),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 29),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 30),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 10),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 9),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 11),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 12),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 19),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 25),
        artist_id: 4
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 28),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 29),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 30),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 10),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 9),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 11),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 12),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 19),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 25),
        artist_id: 5
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 30),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 20),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 10, 19),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 3),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 4),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 2),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 25),
        artist_id: 9
      }),
    knex('availabilities').insert(
      { date: new Date(2018, 11, 26),
        artist_id: 9
      }),
  ]);
};