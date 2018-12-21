
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('price_packages').insert(
      { tier: 1,
        user_id: 1,
        price: 80,
        description: `30min to 40min. No changing tent provided. 1 professionally retouched image + 20 to 30 edited digitals`
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 1,
        price: 120,
        description: `45min - 1hr. 3 professionally retouched images + 20 to 30 edited digitals.`
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 1,
        price: 300,
        description: `2 hrs. 10 professionally retouched images + 40 to 50 edited digitals.`
      }),
    knex('price_packages').insert(
      { tier: 1,
        user_id: 2,
        price: 1250,
        description: `Ideal for weddings. 4 hours from the ceremony to the cocktails. Includes: High-resolution photos, a comprehensive consultation session, calibrated images, retouched, each available in colour and black and white, digital images delivered by hyperlink.`
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 2,
        price: 1750,
        description: `Ideal for weddings. 6 hours from preparations to cocktails. Includes: High-resolution photos, a comprehensive consultation session, calibrated images, retouched, each available in colour and black and white, digital images delivered by hyperlink.`
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 2,
        price: 2750,
        description: `Ideal for weddings. 10 hours from preparations to the first dance. Includes: High-resolution photos, a comprehensive consultation session, calibrated images, retouched, each available in colour and black and white, digital images delivered by hyperlink.`
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
      }),
    knex('price_packages').insert(
      { tier: 1,
        user_id: 9,
        price: 150,
        description: "This is ideal for a pet photoshoot. Includes a 3 hour session with 2 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 2,
        user_id: 9,
        price: 300,
        description: "This is ideal for a pet photoshoot with 2 animals. Includes a 4 hour session with 4 8x10 prints."
      }),
    knex('price_packages').insert(
      { tier: 3,
        user_id: 9,
        price: 500,
        description: "This is ideal for a pet photoshoot with 5 animals. Includes all-day photography and your choice of 2 16x10 prints, 5 8x10 prints, and 1 photobook."
      })
  ]);
};