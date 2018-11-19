exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('availabilities').insert(
      { id: 1,
        start_date: 11/12/2018,
        end_date: 11/12/2018,
        artist_id: 1
      }),
    knex('availabilities').insert(
      { id: 2,
        start_date: 8/11/2018,
        end_date: 10/11/2018,
        artist_id: 3
      }),
    knex('availabilities').insert(
      { id: 3,
        start_date: 6/11/2018,
        end_date: 11/11/2018,
        artist_id: 2
      }),
    knex('availabilities').insert(
      { id: 4,
        start_date: 9/11/2018,
        end_date: 10/11/2018,
        artist_id: 4
      }),
    knex('availabilities').insert(
      { id: 5,
        start_date: 7/12/2018,
        end_date: 8/12/2018,
        artist_id: 5
      }),
    knex('availabilities').insert(
      { id: 6,
        start_date: 10/11/2018,
        end_date: 10/11/2018,
        artist_id: 6
      })
  ]);
};