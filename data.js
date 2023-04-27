const indian_list = [
  {
    img: "images/indian1.jpg",
    name: "Tum Hi Ho",
    artist: "Arijit Singh",
    music: "music/indian1.mp3",
  },
  {
    img: "images/indian2.jpg",
    name: "Kashmir Main Tu Kanyakumari",
    artist: "Arijit Singh",
    music: "music/indian2.mp3",
  },
  {
    img: "images/indian3.jpg",
    name: "Jab Tak Hai Jaan",
    artist: "Sunidhi Chauhan",
    music: "music/indian3.mp3",
  },
  {
    img: "images/indian4.jpg",
    name: "Dilwale",
    artist: "Amitabh Bhattacharya",
    music: "music/indian4.mp3",
  },
  {
    img: "images/indian5.jpg",
    name: "Tujh Mein Rab Dikhta Hai",
    artist: "Roopkumar Rathod",
    music: "music/indian5.mp3",
  },
];
const korean_list = [
  {
    img: "images/Korean1.jpg",
    name: "Butter",
    artist: "BTS",
    music: "music/Korean1.mp3",
  },
  {
    img: "images/Korean2.jpg",
    name: "Crush beautiful life",
    artist: "Daryl Ong version",
    music: "music/Korean2.mp3",
  },
  {
    img: "images/Korean3.jpg",
    name: "Dynamite",
    artist: "BTS",
    music: "music/Korean3.mp3",
  },
  {
    img: "images/Korean4.jpg",
    name: "How you like that",
    artist: "Blackpink",
    music: "music/Korean4.mp3",
  },
  {
    img: "images/Korean5.jpg",
    name: "Antifragile",
    artist: "Le Sserafim",
    music: "music/Korean5.mp3",
  },
];
const France_list = [
  {
    img: "images/france1.jpg",
    name: "Derniere danse",
    artist: "Indila",
    music: "music/france1.mp3",
  },
  {
    img: "images/france2.jpg",
    name: "Dans mes pensées",
    artist: "Jonathan Godin",
    music: "music/france2.mp3",
  },
  {
    img: "images/france3.jpg",
    name: "Ramenez la coupe à la maison",
    artist: "Vegedream",
    music: "music/france3.mp3",
  },
  {
    img: "images/france4.jpg",
    name: "Liberte soolking",
    artist: "Soolking",
    music: "music/france4.mp3",
  },
  {
    img: "images/france5.jpg",
    name: "Love Story",
    artist: "Indila",
    music: "music/france5.mp3",
  },
];
const English_list = [
  {
    img: "images/english1.jpg",
    name: "Calm Down",
    artist: "Rema",
    music: "music/english1.mp3",
  },
  {
    img: "images/english2.jpg",
    name: "My money don't jiggle it folds",
    artist: "Duke & Jones",
    music: "music/english2.mp3",
  },
  {
    img: "images/english3.jpg",
    name: "Under the influence",
    artist: "Chris Brown",
    music: "music/english3.mp3",
  },
  {
    img: "images/english4.jpg",
    name: "Bloody Mary",
    artist: "Lady Gaga",
    music: "music/english4.mp3",
  },
  {
    img: "images/english5.jpg",
    name: "Perfect body with a perfect smile",
    artist: "Charly Black",
    music: "music/english5.mp3",
  },
];
const Arabic_list = [
  {
    img: "images/arabic1.jpg",
    name: "Ah Ya Laly",
    artist: "Mohamed Mounir",
    music: "music/arabic1.mp3",
  },
  {
    img: "images/arabic2.jpg",
    name: "Odam Merayetha",
    artist: "Amr Diab",
    music: "music/arabic2.mp3",
  },
  {
    img: "images/arabic3.jpg",
    name: "Saaba",
    artist: "Temer Hosny",
    music: "music/arabic3.mp3",
  },
  {
    img: "images/arabic4.jpg",
    name: "ElBakht",
    artist: "Wegz",
    music: "music/arabic4.mp3",
  },
  {
    img: "images/arabic5.jpg",
    name: "Hetta Tanya",
    artist: "Ruby",
    music: "music/arabic5.mp3",
  },
];
favourite_list = [];
const Search_music = [
  {
    name: "Tum Hi Ho",
    index: 1,
    category: "india",
  },
  {
    name: "Kashmir Main Tu Kanyakumari",
    index: 2,
    category: "india",
  },
  {
    name: "Jab Tak Hai Jaan",
    index: 3,
    category: "india",
  },
  {
    name: "Dilwale",
    index: 4,
    category: "india",
  },
  {
    name: "Tujh Mein Rab Dikhta Hai",
    index: 5,
    category: "india",
  },
  {
    name: "Butter",
    index: 1,
    category: "korea",
  },
  {
    name: "Crush beautiful life",
    index: 2,
    category: "korea",
  },
  {
    name: "Dynamite",
    index: 3,
    category: "korea",
  },
  {
    name: "How you like that",
    index: 4,
    category: "korea",
  },
  {
    name: "Antifragile",
    index: 5,
    category: "korea",
  },
  {
    name: "Derniere danse",
    index: 1,
    category: "france",
  },
  {
    name: "Dans mes pensées",
    index: 2,
    category: "france",
  },
  {
    name: "Ramenez la coupe à la maison",
    index: 3,
    category: "france",
  },
  {
    name: "Liberte soolking",
    index: 4,
    category: "france",
  },
  {
    name: "Love Story",
    index: 5,
    category: "france",
  },
  {
    name: "Calm Down",
    index: 1,
    category: "english",
  },
  {
    name: "My money don't jiggle it folds",
    index: 2,
    category: "english",
  },
  {
    name: "Under the influence",
    index: 3,
    category: "english",
  },
  {
    name: "Bloody Mary",
    index: 4,
    category: "english",
  },
  {
    name: "Perfect body with a perfect smile",
    index: 5,
    category: "english",
  },
  {
    name: "Ah Ya Laly",
    index: 1,
    category: "arabic",
  },
  {
    name: "Odam Merayetha",
    index: 2,
    category: "arabic",
  },
  {
    name: "Saaba",
    index: 3,
    category: "arabic",
  },
  {
    name: "ElBakht",
    index: 4,
    category: "arabic",
  },
  {
    name: "Hetta Tanya",
    index: 5,
    category: "arabic",
  },
];
