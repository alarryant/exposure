exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('images').insert(
      { id: 1,
        title: 'Airport Sunset',
        description: 'A plane on a sunny evening.',
        featured: 'false',
        category: ['commercial', 'plane'],
        src: '../public/images/AAM-1114-022.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 2,
        title: 'Floating',
        description: 'Portrait of a woman floating in a pond.',
        featured: 'true',
        category: ['nature', 'portrait'],
        src: '../public/images/AV_8549.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 3,
        title: 'Ford Canada Shoot',
        description: 'A shoot I did Ford Canada.',
        featured: 'true',
        category: ['commercial', 'car', 'nature'],
        src: '../public/images/RAVI_VORA_FORDCANADA__DSC6182.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 4,
        title: 'Haley Permenter 1',
        description: 'Shoot I did with Haley Permenter in Vegas.',
        featured: 'false',
        category: ['portrait', 'commercial'],
        src: '../public/images/RAVI_VORA_HALEY_PERMENTER__RAV5758.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 5,
        title: 'Haley Permenter 2',
        description: 'Shoot I did with Haley Permenter in Vegas.',
        featured: 'true',
        category: ['portrait', 'commercial'],
        src: '../public/images/RAVI_VORA_HALEY_PERMENTER__RAV5940.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 6,
        title: 'Haley Permenter 3',
        description: 'Shoot I did with Haley Permenter in Vegas.',
        featured: 'false',
        category: ['portrait', 'commercial'],
        src: '../public/images/RAVI_VORA_HALEY_PERMENTER__RAV6025.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 7,
        title: 'Jelena Marija',
        description: 'Shoot I did with Jelena Marija in 2017.',
        featured: 'false',
        category: ['portrait', 'commercial'],
        src: '../public/images/RAVI_VORA_JELENA_MARIJA__RAV3688.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 8,
        title: 'Manny Pacquiao',
        description: 'A shoot I did for NIKE.',
        featured: 'true',
        category: ['portrait', 'commercial'],
        src: '../public/images/RAVI_VORA_MANNY_PACQUIAO_NIKE_01.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 9,
        title: 'Training Josh Bridges',
        description: 'A shoot I did with Josh Bridges for NIKE.',
        featured: 'false',
        category: ['commercial'],
        src: '../public/images/RAVI_VORA_NIKE_TRAINING_JOSH_BRIDGES__RAV4952.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 10,
        title: 'Norway',
        description: 'A NIKE shoot in Norway.',
        featured: 'false',
        category: ['commercial', 'nature', 'landscape'],
        src: '../public/images/RAVI_VORA_RAVI_VORA_NORWAY__RAV3397_nike.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 11,
        title: 'Sarah',
        description: 'I was lucky enough to shoot Sarah Curr in 2018.',
        featured: 'false',
        category: ['portrait', 'commercial'],
        src: '../public/images/RAVI_VORA_SARAH_CURR__RAV0626.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 12,
        title: 'Untitled',
        description: 'While shooting for NIKE in the mountains a happy accident happened.',
        featured: 'true',
        category: ['commercial', 'nature', 'landscape', 'outdoors'],
        src: '../public/images/RAVI_VORA_untitled__DSC0932_lowres.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 13,
        title: 'Visit Jordan',
        description: 'Raging river has cut through the rock.',
        featured: 'false',
        category: ['commercial', 'nature', 'landscape'],
        src: '../public/images/RAVI_VORA_VISIT_JORDAN__RAV1638.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 14,
        title: 'Elder',
        description: 'A portrait of a mother in a small rural town.',
        featured: 'false',
        category: ['commercial', 'nature', 'portrait'],
        src: '../public/images/RAVI_VORA_VISIT_JORDAN__RAV3651.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { id: 15,
        title: 'In Love',
        description: 'Portrait of couple.',
        featured: 'true',
        category: ['portrait', 'wedding'],
        src: '../public/images/1-6ab7b3e07f4cbaac394bcc26fe6088f2.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 16,
        title: 'Out the door',
        description: 'A wedding shoot in Black and White.',
        featured: 'false',
        category: ['portrait', 'wedding'],
        src: '../public/images/1-dd2f249bbeb60461904d79951cd374d3.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 17,
        title: 'The Kiss',
        description: 'An engagement portrait session.',
        featured: 'true',
        category: ['portrait', 'wedding', 'commercial'],
        src: '../public/images/2-2a210c36a9ae1790513ca13e3273ca81.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 18,
        title: 'Young Love',
        description: 'An engagement portrait session.',
        featured: 'true',
        category: ['portrait', 'wedding', 'commercial'],
        src: '../public/images/2-2c095f1e5537fa58293a26df01f45031.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 19,
        title: 'Love On The Floor',
        description: 'An engagement portrait session.',
        featured: 'true',
        category: ['portrait', 'wedding', 'commercial'],
        src: '../public/images/2-3ed541342a098484c4b88c55f215c200.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 20,
        title: 'I Do',
        description: 'A wedding shoot by the sea.',
        featured: 'false',
        category: ['portrait', 'wedding', 'commercial'],
        src: '../public/images/2-63dec5918630d8bcb1eff8106f851524.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 21,
        title: 'The Isle',
        description: 'A Black and White wedding shoot.',
        featured: 'false',
        category: ['portrait', 'wedding'],
        src: '../public/images/2-cbfd373bcc3e5d2d8f35ee0500f66bd4.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 22,
        title: 'Ocean Girl',
        description: 'A wedding shoot by the sea.',
        featured: 'false',
        category: ['portrait', 'wedding'],
        src: '../public/images/2-f7eb9069a6a9ae9ccc2bdbfb3008edec.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 23,
        title: 'The View Over Here',
        description: 'A scenic landscape view.',
        featured: 'false',
        category: ['landscape', 'nature', 'summer'],
        src: '../public/images/2000-54dd0b0a04a5a03910154d4f228775fc.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 24,
        title: 'The Door',
        description: 'A shot of where I was staying in Europe.',
        featured: 'false',
        category: ['landscape', 'commercial'],
        src: '../public/images/2000-e6c0dc027b73d333d0533566c38ec19e.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { id: 25,
        title: 'Aerial Shot Of Tundra',
        description: 'A shoot up North from a plane.',
        featured: 'false',
        category: ['landscape', 'nature'],
        src: '../public/images/Aerial-Shot-of-Tundra-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 26,
        title: 'Crown Cranes',
        description: 'A wildlife shot of Cranes in winter.',
        featured: 'true',
        category: ['landscape', 'nature', 'birds', 'animals', 'winter'],
        src: '../public/images/Crown-Cranes-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 27,
        title: 'Green Winged Macaws',
        description: 'Green Winged Macaws on the side of a cliff.',
        featured: 'true',
        category: ['landscape', 'nature', 'birds', 'animals'],
        src: '../public/images/Green-Winged-Macaws-on-Claylick-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 28,
        title: 'Kaisers Newt',
        description: 'A newt in water.',
        featured: 'true',
        category: ['nature', 'newt', 'animals'],
        src: '../public/images/Kaisers-Newt-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 29,
        title: 'Military Macaw 1',
        description: 'A portrait of a Military Macaw',
        featured: 'false',
        category: ['nature', 'bird', 'animals'],
        src: '../public/images/Military-Macaw-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 30,
        title: 'Military Macaw 2',
        description: 'A portrait of a Military Macaw in flight.',
        featured: 'false',
        category: ['nature', 'bird', 'animals'],
        src: '../public/images/Military-Macaw-Flying-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 31,
        title: 'Polar Bear Footprints',
        description: 'Polar Bear footprints in the snow.',
        featured: 'false',
        category: ['nature', 'landscape', 'animals', 'winter'],
        src: '../public/images/Polar-Bear-Footprints-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 32,
        title: 'Polar Bears',
        description: 'Polar Bears on the ice.',
        featured: 'false',
        category: ['nature', 'landscape', 'animals', 'winter', 'bear'],
        src: '../public/images/Polar-Bears_2-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 33,
        title: 'Whiteback Vultures',
        description: 'Whiteback Vultures descending on a meal.',
        featured: 'false',
        category: ['nature', 'animals', 'birds'],
        src: '../public/images/Whiteback-Vultures-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 34,
        title: 'Yellow Eye Tree Frog',
        description: 'A portrait of a Yellow Eye Tree Frog',
        featured: 'true',
        category: ['nature', 'animals', 'frog'],
        src: '../public/images/Yellow-Eye-Tree-Frog-3-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { id: 35,
        title: 'Wedding Table',
        description: 'A night Wedding shoot.',
        featured: 'true',
        category: ['wedding', 'commercial'],
        src: '../public/images/A-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 36,
        title: 'The Bride',
        description: 'A portrait of a Bride preparing to walk down the isle.',
        featured: 'false',
        category: ['wedding', 'commercial', 'portrait'],
        src: '../public/images/B-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 37,
        title: 'I Do',
        description: 'A happy couple kissing during their big day.',
        featured: 'false',
        category: ['wedding', 'portrait'],
        src: '../public/images/C-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 36,
        title: 'The Moment',
        description: 'A happy couple after saying their vows and being pronounced man and whife.',
        featured: 'true',
        category: ['wedding', 'portrait'],
        src: '../public/images/E-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 38,
        title: 'Bridesmaids',
        description: 'Bridesmaids getting ready for the ceremony to start.',
        featured: 'true',
        category: ['wedding', 'portrait'],
        src: '../public/images/G-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 39,
        title: 'Morning is hard',
        description: 'Portrait of a loved one waking up.',
        featured: 'true',
        category: ['portrait'],
        src: '../public/images/IMG_3954-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 40,
        title: 'Closer Inspection',
        description: 'Portrait of a sibling.',
        featured: 'true',
        category: ['portrait'],
        src: '../public/images/IMG_4140-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 41,
        title: 'The Square',
        description: 'A historic building someplace romantic.',
        featured: 'false',
        category: ['landscape'],
        src: '../public/images/IMG_6978-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 42,
        title: 'Minis',
        description: 'Woman resting on a mini on a suny day.',
        featured: 'true',
        category: ['portrait', 'car'],
        src: '../public/images/IMG_7264-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 43,
        title: 'Bug',
        description: 'An old VW Bug in all it\'s glory',
        featured: 'false',
        category: ['portrait', 'car'],
        src: '../public/images/IMG_7480-1347x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 44,
        title: 'Dunes',
        description: 'Sand dunes at the beach.',
        featured: 'false',
        category: ['landscape', 'beach'],
        src: '../public/images/IMG_7696-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 45,
        title: 'Preperation',
        description: 'A Bride dressing for her wedding.',
        featured: 'false',
        category: ['portrait', 'wedding'],
        src: '../public/images/K-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 46,
        title: 'The Ultimate',
        description: 'Gorgeous cupcakes sitting on a table for a wedding.',
        featured: 'false',
        category: ['wedding', 'food', 'decor'],
        src: '../public/images/O-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { id: 47,
        title: 'Happy Family',
        description: 'A happy family expecting a new member.',
        featured: 'false',
        category: ['portrait', 'children', 'family'],
        src: '../public/images/jennrepp_portraits_001.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 48,
        title: 'Cute',
        description: 'A young girl in the summer.',
        featured: 'true',
        category: ['portrait', 'children'],
        src: '../public/images/jennrepp_portraits_002.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 49,
        title: 'Sweet',
        description: 'A young girl among the dasies.',
        featured: 'true',
        category: ['portrait', 'children'],
        src: '../public/images/jennrepp_portraits_003.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 50,
        title: 'Playtime',
        description: 'A portrait of a young boy and his toys.',
        featured: 'false',
        category: ['portrait', 'children'],
        src: '../public/images/jennrepp_portraits_005.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 51,
        title: 'Joy',
        description: 'A baby ni the hands of a loved one.',
        featured: 'true',
        category: ['portrait', 'baby', 'family'],
        src: '../public/images/jennrepp_portraits_007.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 52,
        title: 'Young and Youngest',
        description: 'Sister and new baby getting to know each other.',
        featured: 'true',
        category: ['portrait', 'baby', 'family', 'children'],
        src: '../public/images/jennrepp_portraits_009.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 53,
        title: 'The Center of Attention',
        description: 'A happy couple and their faithful best friend.',
        featured: 'true',
        category: ['portrait', 'family', 'dog', 'animals'],
        src: '../public/images/jennrepp_portraits_012.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 54,
        title: 'Cat Freaks',
        description: 'A couple in their home with their furry babies on proud display.',
        featured: 'true',
        category: ['portrait', 'family', 'cat', 'animals'],
        src: '../public/images/jennrepp_portraits_013.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 55,
        title: 'Young Family',
        description: 'Portrait of a young family.',
        featured: 'false',
        category: ['portrait', 'family', 'baby'],
        src: '../public/images/jennrepp_portraits_015.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 56,
        title: 'Hoooo are you?',
        description: 'Portrait of a costumed child on the couch.',
        featured: 'true',
        category: ['portrait', 'family', 'baby'],
        src: '../public/images/jennrepp_portraits_017.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 57,
        title: 'The Happiest Guy',
        description: 'Portrait of a baby boy all dressed up in a chair.',
        featured: 'false',
        category: ['portrait', 'family', 'baby'],
        src: '../public/images/jennrepp_portraits_019.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 58,
        title: '2 + 1',
        description: 'A portrait of young siblings.',
        featured: 'true',
        category: ['portrait', 'family', 'children'],
        src: '../public/images/jennrepp_portraits_021.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 59,
        title: 'Summer Vacation',
        description: 'Visiting the ocean on a beautiful sunny day.',
        featured: 'false',
        category: ['portrait', 'family', 'children'],
        src: '../public/images/jennrepp_portraits_023.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { id: 60,
        title: 'Snuggle Bunch',
        description: 'Two siblings together on a bed.',
        featured: 'true',
        category: ['portrait', 'family', 'children'],
        src: '../public/images/jennrepp_portraits_027.jpg',
        image_owner: 5
      })
  ]);
};
