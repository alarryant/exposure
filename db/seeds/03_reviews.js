exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('reviews').insert(
      { rating: 3,
        description: 'Ravi is extremely personable, good humoured and most importantly he understood what we were looking for.',
        artist_id: 2,
        user_id: 6
      }),
    knex('reviews').insert(
      { rating: 4,
        description: 'Olya is extremely personable, good humoured and most importantly she understood what we were looking for.',
        artist_id: 1,
        user_id: 7
      }),
    knex('reviews').insert(
      { rating: 5,
        description: 'Tim is extremely personable, good humoured and most importantly he understood what we were looking for.',
        artist_id: 3,
        user_id: 8
      }),
    knex('reviews').insert(
      { rating: 3,
        description: 'Lucie is extremely personable, good humoured and most importantly she understood what we were looking for.',
        artist_id: 4,
        user_id: 6
      }),
    knex('reviews').insert(
      { rating: 2,
        description: 'Jenn is extremely personable, good humoured and most importantly she understood what we were looking for.',
        artist_id: 5,
        user_id: 7
      })
  ]);
};
