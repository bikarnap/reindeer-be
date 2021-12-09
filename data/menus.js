let foodData = [
  {
    label: 'Alkuoalat',
    id: '1',
    menus: [
      {
        id: '1',
        item: 'Luomumuna, lehtikaalia & tatteja',
        ingredient: 'Luomumuna, lehtikaalia, tatteja',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/lehtikaali.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '2',
        item: 'Kauden Salaatti',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/kauden_salaatti.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '3',
        item: 'Graavisiika',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/graavisiika.jpg?raw=true',
        foodChoices: ['Lactose free'],
        price: 10,
      },
      {
        id: '4',
        item: 'Kermainnen metsäsienikeeitto',
        ingredient: 'metsäsieni',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/kermainnen_metsasienikeeitto.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 8,
      },
      {
        id: '5',
        item: 'Lohitartar ja puolukoita',
        ingredient: 'Lohitartar, puolukoita',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/lohitartar_puolukoita.jpg?raw=true',
        foodChoices: ['Lactose free'],
        price: 9,
      },
      {
        id: '6',
        item: 'Lohi katkaraputoast',
        ingredient: 'Lohi, katkaraputoas',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/lohi_katkaraputoast.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 11,
      },
      {
        id: '7',
        item: 'Punajuurta & vuohenjuustoa',
        ingredient: 'Punajuurta, vuohenjuustoa',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/punajuurta_vuohenjuustoa.jpg?raw=true',
        foodChoices: ['Veg'],
        price: 10,
      },
      {
        id: '8',
        item: 'Porotartar',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/porotartar.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 11,
      },
      {
        id: '9',
        item: 'Metsäsienisalaatti',
        ingredient: 'Metsäsieni',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/metsäsienisalaatti.png?raw=true',
        foodChoices: ['Veg'],
        price: 8,
      }
    ],
  },
  {
    label: 'Pääruoat',
    id: '2',
    menus: [
      {
        id: '1',
        item: 'Savuporolla täytetty poronfilé, katajanmarjakastike, paahdetut puikulat ',
        ingredient: 'Savuporolla täytetty poronfilé, katajanmarjakastike, paahdetut puikulat',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Non-Veg'],
        price: 18,
      },
      {
        id: '2',
        item: 'Paahteella kypsytetty Siikafilee, perunapyree, voikastike',
        ingredient: 'Paahteella kypsytetty Siikafilee, perunapyree, voikastike',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 17,
      },
      {
        id: '3',
        item: 'poronkäristys, puikula muussi ja puolukka',
        ingredient: 'poronkäristys, puikula muussi, puolukka',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Non-Veg'],
        price: 21,
      },
      {
        id: '4',
        item: 'Kevyesti savustettua lohta ja kauden kasviksia',
        ingredient: 'Kevyesti savustettua lohta, kauden kasviksia',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 21,
      },
      {
        id: '5',
        item: 'kuhaa, paahdettuja yrttijuureksia ja röstiperunaa',
        ingredient: 'kuhaa, paahdettuja yrttijuureksia, röstiperunaa',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 17,
      },
      {
        id: '6',
        item: 'Broileria ja vuohenjuustoa',
        ingredient: 'Broileria, vuohenjuustoa ',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Non-Veg'],
        price: 18,
      },
      {
        id: '7',
        item: 'Savukalaa, Lapin puikulaperunoita, rieskaa',
        ingredient: 'Savukalaa, Lapin puikulaperunoita, rieskaa',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 20,
      },
      {
        id: '8',
        item: 'Maa-artisokkaa & omenaa',
        ingredient: 'Maa-artisokkaa, omenaa',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Lacto Veg'],
        price: 16,
      }
    ],
  },
  {
    label: 'Jälkiruoka',
    id: '3',
    menus: [
      {
        id: '1',
        item: 'Täyteläistä suklaakakkua ja vaniljajäätelöä ',
        ingredient: 'Täyteläistä suklaakakkua, vaniljajäätelöä',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 6,
      },
      {
        id: '2',
        item: 'Kaneliomena, kauracrumblea & vaniljajäätelöä',
        ingredient: 'Kaneliomena, kauracrumblea, vaniljajäätelöä',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 7,
      },
      {
        id: '3',
        item: 'Juustoleipä & lakkahillo',
        ingredient: 'Juustoleipä, lakkahillo',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 7,
      },
      {
        id: '4',
        item: 'Kanelikerma',
        ingredient: 'Kanelikerma',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 4,
      },
      {
        id: '5',
        item: 'pohjoisen marjoja marengin ja jäätelön kanssa',
        ingredient: 'pohjoisen marjoja marengin',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 9,
      },
      {
        id: '6',
        item: 'Mustikka Vinaigrette',
        ingredient: 'Mustikka Vinaigrette',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 9,
      },
      {
        id: '7',
        item: 'Marjasorbet',
        ingredient: 'Marjasorbet',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 8,
      },
      {
        id: '8',
        item: 'punaherukka pie (pohjoismainen versio sitruuna-marenkipiiraasta)',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 8,
      },
      {
        id: '9',
        item: 'kolmen kaverin jäätelöt',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 6,
      },
      {
        id: '10',
        item: 'Salted caramel -juustokakkua',
        ingredient: 'suola, caramel, juusto',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '11',
        item: 'Mustikka Creme brulee',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 8,
      }
    ],
  },
  {
    label: 'Juoma',
    id: '4',
    menus: [
      {
        id: '1',
        item: 'Mustikksmehu',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 5,
      },
      {
        id: '2',
        item: 'Panimon tumma olut',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 7,
      },
      {
        id: '3',
        item: 'Luomu punaviini',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 9,
      },
      {
        id: '4',
        item: 'Suomalaiset "Viinit"',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '5',
        item: 'Luomu valkoviini',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '6',
        item: 'Luomu kuohuviini',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '7',
        item: 'Lakkamehu',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 6,
      },
      {
        id: '8',
        item: 'Aveciksi lakkalikööri',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 10,
      },
      {
        id: '9',
        item: 'Mustikka Creme brulee',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 8,
      },
      {
        id: '10',
        item: 'Kahvi',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 5,
      },
      {
        id: '11',
        item: 'Tee',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 5,
      }
      ,
      {
        id: '12',
        item: 'Ranualaisen viinitilan Virvatulet Raparperiviini, kuiva',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 11,
      },
      {
        id: '13',
        item: 'Vesi',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/2.jpg?raw=true',
        foodChoices: ['Gluton free'],
        price: 3,
      }
    ],
  },
  {
    label: 'Lahja',
    id: '5',
    menus: [
      {
        id: '1',
        item: 'Kalenteri',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/calendar.jpg?raw=true',
        foodChoices: [],
        price: 6,
      },
      {
        id: '2',
        item: 'Kuksa',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/kuksa.jpg?raw=true',
        foodChoices: [],
        price: 8,
      },
      {
        id: '3',
        item: 'VR juna pienoismalli',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/train_model.jpg?raw=true',
        foodChoices: [],
        price: 12,
      },
      {
        id: '4',
        item: 'Kuvausseinällä otettu matkamuistokuva',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/souvenir_photo.jpg?raw=true',
        foodChoices: [],
        price: 8,
      },
      {
        id: '5',
        item: 'Poronsarviavaimenperä',
        ingredient: '',
        available: true,
        country: 'Finland',
        discount: 'FI',
        image: 'https://github.com/bikarnap/reindeer-be/blob/main/data/images/reindeer_horn_keychain.jpeg?raw=true',
        foodChoices: [],
        price: 7,
      },
    ],
  },
];

module.exports = foodData;