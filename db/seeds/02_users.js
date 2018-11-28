exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert(
      { first_name: 'Ravi',
        last_name: 'Vora',
        email: 'ravivora@email.com',
        password: '1234',
        bio: 'Specializing in commercial work with a focus on portraiture, lifestyle, travel, adventure, and above all else: STORY.',
        profile_image: '/images/ravi-vora-avatar.jpg',
        website_url: 'http://www.ravivora.com/',
        instagram_url: 'https://www.instagram.com/ravivora/',
        facebook_url: 'null',
        twitter_url: 'https://twitter.com/RaviVora',
        location: 'Los Angeles',
        user_type_id: 1
      }),
    knex('users').insert(
      { first_name: 'Olya',
        last_name: 'Kobruseva',
        email: 'olyakobruseva@email.com',
        password: '1234',
        bio: `Hi, I'm Olya, and i’m a destination wedding photographer. Currently based in Barcelona and available for destination weddings.
                I shoot with digital camera and i use a mix of Photojournalistic, Editorial and Fine Art Style to document sincere moments and tell my clients their story in the most beautiful and timeless way.
                I love to take pictures of happy people and be the part of their story.
                Here you will find different series of photographs that reflect my style, and the way I see a wedding photography. I like to shoot small and cozy weddings, as well as large and noisy ones, in my country and overseas. If our views coincide, and you feel that I am the photographer you were looking for, then send me an email and tell me about you and your wedding day. I like good stories. Let's talk, because this is where it all begins.`,
        profile_image: '/images/olya-kobruseva-avatar.jpg',
        website_url: 'http://kobruseva.com/',
        instagram_url: 'https://www.instagram.com/leeloothefirst/',
        facebook_url: 'https://www.facebook.com/LeelooTheFirst',
        twitter_url: 'null',
        location: 'Barcelona',
        user_type_id: 1
      }),
    knex('users').insert(
      { first_name: 'Tim',
        last_name: 'Flach',
        email: 'timflach@email.com',
        password: '1234',
        bio: 'Floofs puggo you are doin me a concern shooberino, pupperino you are doing me a frighten doge, shibe big ol. Heckin good boys blep extremely cuuuuuute fluffer long doggo adorable doggo, dat tungg tho very taste wow very jealous pupper ur givin me a spook woofer, big ol pupper long bois snoot heck. Long woofer blep the neighborhood pupper blop smol borking doggo with a long snoot for pats shooberino, heckin angery woofer borkf borkdrive. Heckin angery woofer big ol pupper shoober ruff boof very taste wow, most angery pupper I have ever seen very jealous pupper bork woofer.',
        profile_image: '/images/tim-flach-avatar.jpg',
        website_url: 'https://timflach.com/',
        instagram_url: 'https://www.instagram.com/timflachphotography/',
        facebook_url: 'https://www.facebook.com/timflachphoto/',
        twitter_url: 'https://twitter.com/TimFlach',
        location: 'London',
        user_type_id: 1
      }),
    knex('users').insert(
      { first_name: 'Lucie',
        last_name: 'Urban',
        email: 'lucyurban@email.com',
        password: '1234',
        bio: 'Floofs puggo you are doin me a concern shooberino, pupperino you are doing me a frighten doge, shibe big ol. Heckin good boys blep extremely cuuuuuute fluffer long doggo adorable doggo, dat tungg tho very taste wow very jealous pupper ur givin me a spook woofer, big ol pupper long bois snoot heck. Long woofer blep the neighborhood pupper blop smol borking doggo with a long snoot for pats shooberino, heckin angery woofer borkf borkdrive. Heckin angery woofer big ol pupper shoober ruff boof very taste wow, most angery pupper I have ever seen very jealous pupper bork woofer.',
        profile_image: '/images/lucy-urban-avatar.jpg',
        website_url: 'http://lucieurban.cz/',
        instagram_url: 'https://www.instagram.com/urban_photographe/',
        facebook_url: 'https://www.facebook.com/URBANPHOTOGRAPHE',
        twitter_url: 'null',
        location: 'Prague',
        user_type_id: 1
      }),
    knex('users').insert(
      { first_name: 'Jenn',
        last_name: 'Repp',
        email: 'jennrepp@email.com',
        password: '1234',
        bio: 'I’m a coffee-addicted, dog-loving Seattle girl with a passion for telling stories with photos. My career journey began with a degree in journalism, continued on to art school, took a side trip to Europe, and landed me here in the Northwest, where I’ve spent the last 10 years working full-time as a wedding and lifestyle photographer. My personal style is very much a product of my experience: I believe in capturing real moments, and I want my work to exist at the place where classical beauty and modern design intersect. When I’m not behind the lens, you’re likely to find me either traipsing around the outdoors with my wonderful support team (my amazing husband and our dog Olly), or curled up on the couch, sazerac in hand, watching Arrested Development reruns on Netflix.',
        profile_image: '/images/jenn-repp-avatar.jpg',
        website_url: 'http://www.jennrepp.com/',
        instagram_url: 'https://www.instagram.com/jennreppphoto/',
        facebook_url: 'http://www.facebook.com/photo.jennrepp',
        twitter_url: 'https://twitter.com/jennreppPhoto',
        location: 'Seattle',
        user_type_id: 1
      }),
    knex('users').insert(
      { first_name: 'Michael',
        last_name: 'Wilson',
        email: 'mwilson@email.com',
        password: '1234',
        bio: '',
        profile_image: '/images/michael-avatar.jpg',
        website_url: 'null',
        instagram_url: 'null',
        facebook_url: 'null',
        twitter_url: 'null',
        location: 'null',
        user_type_id: 2
      }),
    knex('users').insert(
      { first_name: 'Carey',
        last_name: 'Brown',
        email: 'careybrown@email.com',
        password: '1234',
        bio: '',
        profile_image: '/images/carey-avatar.jpg',
        website_url: 'null',
        instagram_url: 'null',
        facebook_url: 'null',
        twitter_url: 'null',
        location: 'null',
        user_type_id: 2
      }),
    knex('users').insert(
      { first_name: 'Jenny',
        last_name: 'Chin',
        email: 'jennychin@email.com',
        password: '1234',
        bio: '',
        profile_image: '/images/jenny-avatar.jpg',
        website_url: 'null',
        instagram_url: 'null',
        facebook_url: 'null',
        twitter_url: 'null',
        location: 'null',
        user_type_id: 2
      }),
    knex('users').insert(
      { first_name: 'Angela',
        last_name: 'Chow',
        email: 'angelachow@email.com',
        password: '1234',
        bio: 'Pets are just as much a part of our family as our children. I proudly hang photos of our family on our walls and I should also have photos of our beloved furballs. A personalized dog portrait session will create lasting images and beautiful artwork of your pet that you can proudly hang on your wall for years to come.  I take great pride in creating an individualized session with you to ensure we capture the unique personality of each dog we photograph so that you can have lasting memories that you can hang on your wall for years to come.',
        profile_image: '/images/angela-avatar.jpg',
        website_url: 'http://www.angela-chow.com/',
        instagram_url: 'https://www.instagram.com/chowchow/',
        facebook_url: 'http://www.facebook.com/photo.chowchow',
        twitter_url: 'https://twitter.com/achowchow',
        location: 'Burnaby',
        user_type_id: 1
      })
  ]);
};