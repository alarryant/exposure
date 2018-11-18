exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('price_packages').insert(
      { id: 1,
        tier: 1,
        user_id: 1,
        price: 100
      }),
    knex('price_packages').insert(
      { id: 2,
        tier: 2,
        user_id: 1,
        price: 200
      }),
    knex('price_packages').insert(
      { id: 3,
        tier: 3,
        user_id: 1,
        price: 300
      }),
    knex('price_packages').insert(
      { id: 4,
        tier: 1,
        user_id: 2,
        price: 150
      }),
    knex('price_packages').insert(
      { id: 5,
        tier: 2,
        user_id: 2,
        price: 300
      }),
    knex('price_packages').insert(
      { id: 6,
        tier: 3,
        user_id: 2,
        price: 500
      }),
    knex('price_packages').insert(
      { id: 7,
        tier: 1,
        user_id: 3,
        price: 100
      }),
    knex('price_packages').insert(
      { id: 8,
        tier: 2,
        user_id: 3,
        price: 300
      }),
    knex('price_packages').insert(
      { id: 9,
        tier: 3,
        user_id: 3,
        price: 800
      }),
    knex('price_packages').insert(
      { id: 10,
        tier: 1,
        user_id: 4,
        price: 50
      }),
    knex('price_packages').insert(
      { id: 11,
        tier: 2,
        user_id: 4,
        price: 100
      }),
    knex('price_packages').insert(
      { id: 12,
        tier: 3,
        user_id: 4,
        price: 200
      }),
    knex('price_packages').insert(
      { id: 13,
        tier: 1,
        user_id: 5,
        price: 250
      }),
    knex('price_packages').insert(
      { id: 14,
        tier: 2,
        user_id: 5,
        price: 450
      }),
    knex('price_packages').insert(
      { id: 15,
        tier: 3,
        user_id: 5,
        price: 800
      })
  ]);
};
