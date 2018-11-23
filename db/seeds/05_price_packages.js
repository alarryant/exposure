
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('price_packages').insert(
      { tier: 1,
        user_id: 1,
        price: 100,
        description: "This is ideal for children's birthdays and headshots. Includes a 1 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 1,
        price: 200,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 1,
        price: 300,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 1,
        user_id: 2,
        price: 150,
        description: "This is ideal for children's birthdays and headshots. Includes a 1 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 2,
        price: 300,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 2,
        price: 500,
        description: "This is ideal for large family photoshoots. Includes a 4 hour session with 4 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 1,
        user_id: 3,
        price: 100,
        description: "This is ideal for children's birthdays and headshots. Includes a 1 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 3,
        price: 300,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 3,
        price: 800,
        description: "This is ideal for weddings and engagement shoots. Includes all-day photography and your choice of 2 16x10 prints, 5 8x10 prints, and 1 photobook."
      }),
    knex('price_packages').insert(
      { tier: 1,
        user_id: 4,
        price: 50,
        description: "This is ideal for children's birthdays and headshots. Includes a 1 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 4,
        price: 100,
        description: "This is ideal for children's birthdays and headshots. Includes a 1 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 4,
        price: 200,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 1,
        user_id: 5,
        price: 250,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 5,
        price: 450,
        description: "This is ideal for large family photoshoots. Includes a 4 hour session with 4 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 5,
        price: 800,
        description: "This is ideal for weddings and engagement shoots. Includes all-day photography and your choice of 2 16x10 prints, 5 8x10 prints, and 1 photobook."
      })
  ]);
};