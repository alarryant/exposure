exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('events').insert(
      { name: 'Birthday Party!',
        description: 'Throwing my husband an awesome champagne birthday and would like to have some photos to remember the occasion! Student photographers welcome! Party will be held in the Maple Ridge area in an awesome burger joint. Dont worry... you will eat good that night. Party will start at 8 p.m. on January 17, 2019. Just need you there for a couple of hours (like 2 hours) or you can stay all night if you like the vibe!',
        event_date: '2019-01-17',
        price: 150,
        event_location: 'Maple Ridge',
        artist_accepted: null,
        creator_id: 6,
      }),
    knex('events').insert(
      { name: 'Wedding Photographer needed',
        description: 'In search of a wedding photographer! We are getting married September of 2019. Our budget is $3500 (hopefully including engagement photos) and we are looking for an experienced photographer.',
        event_date: '2019-09-23',
        price: 3500,
        event_location: 'Burnaby',
        artist_accepted: null,
        creator_id: 7,
      }),
    knex('events').insert(
      { name: 'Graduation Looking for a photographer',
        description: 'Currently accepting applications for the 2019 Spring Graduation Season for JJAMs! Our goal is to hire photographers that are able to take good quality photos and who are able to work as many graduation events as possible during the graduation seasons. We are currently accepting applications from photographers who are interested in working with us during the Spring 2019 graduation season and the 2019 Winter graduation season ',
        event_date: '2019-02-10',
        price: 20000,
        event_location: 'Vancouver',
        artist_accepted: null,
        creator_id: 8,
      }),
    knex('events').insert(
      { name: 'We need a family portrait',
        description: 'Currently seeking a highly motivated, hard-working, energetic people person photographing infants, young children and families in the safety of their home. Someone that understands the value of creating memories for each child and family. We are looking for someone in the Surrey area.',
        event_date: '2018-12-27',
        price: 1000,
        event_location: 'Surrey',
        artist_accepted: null,
        creator_id: 6,
      }),
    knex('events').insert(
      { name: 'Looking for a portrait photographer',
        description: 'I’m looking to get family portraits done next Saturday! Hoping to find a photographer that could come to our house, have an in-house studio or do outdoor shoots - only if the weather is nice (looking preferably in Surrey or Whiterock - please let me know ASAP) 🙏🏽',
        event_date: '2019-01-26',
        price: 1200,
        event_location: 'Whiterock',
        artist_accepted: null,
        creator_id: 7,
      })
  ]);
};
