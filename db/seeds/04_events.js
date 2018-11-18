exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('events').insert(
      { id: 1,
        name: 'Birthday Party!',
        description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco.',
        event_date: '2018-10-17',
        price: 150,
        location: 'Vancouver',
        artist_accepted: null,
        creator_id: 6,
      }),
    knex('events').insert(
      { id: 2,
        name: 'Wedding Photographer needed',
        description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco. Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco.',
        event_date: '2019-5-03',
        price: 800,
        location: 'Edmonton',
        artist_accepted: null,
        creator_id: 7,
      }),
    knex('events').insert(
      { id: 3,
        name: 'Graduation Looking for a photographer',
        description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco.',
        event_date: '2019-02-10',
        price: 1500,
        location: 'Toronto',
        artist_accepted: null,
        creator_id: 8,
      }),
    knex('events').insert(
      { id: 4,
        name: 'We need a family portrait',
        description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco.',
        event_date: '2018-18-27',
        price: 100,
        location: 'Vancouver',
        artist_accepted: null,
        creator_id: 6,
      }),
    knex('events').insert(
      { id: 5,
        name: 'Looking for a portrait photographer',
        description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco.',
        event_date: '2019-01-26',
        price: 200,
        location: 'Edmonton',
        artist_accepted: null,
        creator_id: 7,
      })
  ]);
};
