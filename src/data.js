// ============================================================
//  SPOTIFY CLONE — data.js
//  Configured with exactly 7 songs per folder
// ============================================================

export const folders = [
  // ════════════════════════════════
  //  ROW 1 — PLAYLISTS
  // ════════════════════════════════
  {
    id: "folder_global",
    name: "Global Hits",
    description: "Top chart-toppers from around the world",
    cover: "https://picsum.photos/seed/global/300/300",
    type: "playlist",
    songs: [
      { id: "g1",  title: "Blinding Lights",   artist: "The Weeknd",         album: "After Hours",      duration: 200, audioUrl: "/songs/1.mp3" },
      { id: "g2",  title: "Shape of You",      artist: "Ed Sheeran",         album: "Divide",           duration: 234, audioUrl: "/songs/2.mp3" },
      { id: "g3",  title: "Señorita",          artist: "Shawn Mendes, Camila Cabello", album: "Señorita", duration: 191, audioUrl: "/songs/3.mp3" },
      { id: "g4",  title: "As It Was",         artist: "Harry Styles",       album: "Harry's House",    duration: 167, audioUrl: "/songs/4.mp3" },
      { id: "g5",  title: "Stay",              artist: "The Kid LAROI",      album: "F*CK LOVE",        duration: 141, audioUrl: "/songs/5.mp3" },
      { id: "g6",  title: "Levitating",        artist: "Dua Lipa",           album: "Future Nostalgia", duration: 203, audioUrl: "/songs/6.mp3" },
      { id: "g7",  title: "Unholy",            artist: "Sam Smith",          album: "Gloria",           duration: 156, audioUrl: "/songs/7.mp3" },
      { id: "g8",  title: "Calm Down",         artist: "Rema",               album: "Rave & Roses",     duration: 239, audioUrl: "/songs/8.mp3" },
    ]
  },
  {
    id: "folder_india",
    name: "India Top Hits",
    description: "Biggest hits across India right now",
    cover: "https://picsum.photos/seed/india/300/300",
    type: "playlist",
    songs: [
      { id: "i1",  title: "Tauba Tauba",        artist: "Karan Aujla",                  album: "Bad Newz",       duration: 212, audioUrl: "/songs/11.mp3" },
      { id: "i2",  title: "Teri Baaton Mein Aisa Uljha Jiya", artist: "Raghav, Tanishk Bagchi, Asees Kaur", album: "Teri Baaton Mein Aisa Uljha Jiya", duration: 235, audioUrl: "/songs/12.mp3" },
      { id: "i3",  title: "Shararat",           artist: "Shashwat Sachdev, Madhubanti Bagchi, Jasmine Sandlas", album: "Dhurandhar", duration: 224, audioUrl: "/songs/13.mp3" },
      { id: "i4",  title: "Kesariya",           artist: "Arijit Singh",                 album: "Brahmastra",     duration: 268, audioUrl: "/songs/14.mp3" },
      { id: "i5",  title: "Naatu Naatu",        artist: "Rahul Sipligunj",              album: "RRR",            duration: 228, audioUrl: "/songs/15.mp3" },
      { id: "i6",  title: "Raataan Lambiyan",   artist: "Jubin Nautiyal, Asees Kaur",   album: "Shershaah",      duration: 253, audioUrl: "/songs/16.mp3" },
      { id: "i7",  title: "Lutt Le Gaya",       artist: "Shashwat Sachdev, Simran Choudhary", album: "Dhurandhar", duration: 247, audioUrl: "/songs/17.mp3" },
    ]
  },
  {
    id: "folder_hindi",
    name: "Hindi Bollywood Hits",
    description: "Best of Bollywood — classic and modern",
    cover: "https://picsum.photos/seed/hindi/300/300",
    type: "playlist",
    songs: [
      { id: "h1",  title: "Tum Hi Ho",         artist: "Arijit Singh",              album: "Aashiqui 2",         duration: 261, audioUrl: "/songs/21.mp3" },
      { id: "h2",  title: "Channa Mereya",      artist: "Arijit Singh",              album: "Ae Dil Hai Mushkil", duration: 288, audioUrl: "/songs/22.mp3" },
      { id: "h3",  title: "Kal Ho Naa Ho",      artist: "Sonu Nigam",                album: "Kal Ho Na Ho",       duration: 340, audioUrl: "/songs/23.mp3" },
      { id: "h4",  title: "Dil Diyan Gallan",   artist: "Atif Aslam",                album: "Tiger Zinda Hai",    duration: 284, audioUrl: "/songs/24.mp3" },
      { id: "h5",  title: "Galliyan",           artist: "Ankit Tiwari",              album: "Ek Villain",         duration: 278, audioUrl: "/songs/25.mp3" },
      { id: "h6",  title: "Bekhayali",          artist: "Sachet Tandon",             album: "Kabir Singh",        duration: 434, audioUrl: "/songs/26.mp3" },
      { id: "h7",  title: "Kaise Hua",          artist: "Vishal Mishra",             album: "Kabir Singh",        duration: 221, audioUrl: "/songs/27.mp3" },
    ]
  },
        {
        id: "folder_marathi",
        name: "Top Marathi Hits",
        description: "Best of Marathi music — folk to film",
        cover: "https://picsum.photos/seed/marathi/300/300",
        type: "playlist",
        songs: [
          { id: "m1",  title: "Reshmi Reshmi",         artist: "Sonu Nigam, Anandi Joshi",     album: "One Way Ticket",       duration: 265, audioUrl: "/songs/31.mp3" },
          { id: "m2",  title: "Zingaat",               artist: "Ajay-Atul",                    album: "Sairat",               duration: 218, audioUrl: "/songs/32.mp3" },
          { id: "m3",  title: "Wajle Ki Bara",         artist: "Bela Shende",                  album: "Natarang",             duration: 215, audioUrl: "/songs/33.mp3" },
          { id: "m4",  title: "Tu Jarashi",            artist: "Hrishikesh Ranade",            album: "Ti Saddhya Kay Karte", duration: 240, audioUrl: "/songs/34.mp3" },
          { id: "m5",  title: "Saavar Re Mana",        artist: "Swapnil Bandodkar",            album: "Mumbai-Pune-Mumbai",   duration: 275, audioUrl: "/songs/35.mp3" },
          { id: "m6",  title: "Sar Sukhachi Shravani", artist: "Ajay-Atul",                    album: "Mumbai-Pune-Mumbai",   duration: 260, audioUrl: "/songs/36.mp3" },
          { id: "m7",  title: "Olya Sanj Veli",        artist: "Swapnil Bandodkar, Bela Shende", album: "Duniyadari",     duration: 245, audioUrl: "/songs/37.mp3" },
        ]
      },
  {
    id: "folder_devotional",
    name: "Devotional Hits",
    description: "Bhajans, aartis and spiritual classics",
    cover: "https://picsum.photos/seed/devotional/300/300",
    type: "playlist",
    songs: [
      { id: "d1",  title: "Om Jai Jagdish Hare",       artist: "Anuradha Paudwal",  album: "Aarti Sangrah",       duration: 312, audioUrl: "/songs/41.mp3" },
      { id: "d2",  title: "Jai Ganesh Jai Ganesh",     artist: "Anuradha Paudwal",  album: "Ganesh Vandana",      duration: 298, audioUrl: "/songs/42.mp3" },
      { id: "d3",  title: "Hanuman Chalisa",           artist: "Hariharan",         album: "Shri Hanuman",        duration: 420, audioUrl: "/songs/43.mp3" },
      { id: "d4",  title: "Swamimanas Pooja",          artist: "Various",           album: "Swami Samarth Stavan",duration: 325, audioUrl: "/songs/44.mp3" },
      { id: "d5",  title: "Ram Raksha",                artist: "Anuradha Paudwal",     album: "Stotra Sangrah",      duration: 380, audioUrl: "/songs/45.mp3" },
      { id: "d6",  title: "Digambara Digambara",       artist: "Swapnil Bandodkar",    album: "Dattatreya Bhajans",  duration: 295, audioUrl: "/songs/46.mp3" },
      { id: "d7",  title: "Shri Sukta",                artist: "Agam Agarwal",  album: "Vedic Chants",        duration: 345, audioUrl: "/songs/47.mp3" },
    ]
},
  // ════════════════════════════════
  //  ROW 2 — ARTIST SPECIALS
  // ════════════════════════════════
  {
    id: "folder_arijit",
    name: "Arijit Singh Special",
    description: "The voice of a generation",
    cover: "https://picsum.photos/seed/arijit/300/300",
    type: "artist_special",
    artist: "Arijit Singh",
    songs: [
      { id: "a1",  title: "Tum Hi Ho",          artist: "Arijit Singh", album: "Aashiqui 2",              duration: 261, audioUrl: "/songs/21.mp3" },
      { id: "a2",  title: "Channa Mereya",       artist: "Arijit Singh", album: "Ae Dil Hai Mushkil",      duration: 288, audioUrl: "/songs/22.mp3" },
      { id: "a3",  title: "Kesariya",            artist: "Arijit Singh", album: "Brahmastra",              duration: 268, audioUrl: "/songs/14.mp3" },
      { id: "a4",  title: "Apna Bana Le",        artist: "Arijit Singh", album: "Bhediya",                 duration: 276, audioUrl: "/songs/54.mp3" },
      { id: "a5",  title: "Tum Hi Ho Bandhu",    artist: "Neeti Mohan, Nikhil D'Souza", album: "Cocktail", duration: 287, audioUrl: "/songs/55.mp3" },
      { id: "a6",  title: "Gerua",               artist: "Arijit Singh", album: "Dilwale",                 duration: 281, audioUrl: "/songs/56.mp3" },
      { id: "a7",  title: "Nashe Se Chad Gayi",  artist: "Arijit Singh", album: "Befikre",                 duration: 238, audioUrl: "/songs/57.mp3" },
    ]
},
  {
    id: "folder_jubin",
    name: "Jubin Nautiyal Special",
    description: "Soulful voice, heartfelt songs",
    cover: "https://picsum.photos/seed/jubin/300/300",
    type: "artist_special",
    artist: "Jubin Nautiyal",
    songs: [
      { id: "j1",  title: "Lut Gaye",                  artist: "Jubin Nautiyal", album: "Single",                  duration: 248, audioUrl: "/songs/61.mp3" },
      { id: "j2",  title: "Raataan Lambiyan",           artist: "Jubin Nautiyal", album: "Shershaah",               duration: 253, audioUrl: "/songs/62.mp3" },
      { id: "j3",  title: "Kahani",                     artist: "Jubin Nautiyal", album: "Single",                  duration: 241, audioUrl: "/songs/63.mp3" },
      { id: "j4",  title: "Safar",                      artist: "Jubin Nautiyal", album: "Jab Harry Met Sejal",     duration: 262, audioUrl: "/songs/64.mp3" },
      { id: "j5",  title: "Tujhe Kitna Chahne Lage",    artist: "Jubin Nautiyal", album: "Kabir Singh",             duration: 274, audioUrl: "/songs/65.mp3" },
      { id: "j6",  title: "Mehrama",                    artist: "Jubin Nautiyal", album: "Love Aaj Kal",            duration: 248, audioUrl: "/songs/66.mp3" },
      { id: "j7",  title: "Bewafa Tera Masoom Chehra",  artist: "Jubin Nautiyal", album: "Single",                  duration: 236, audioUrl: "/songs/67.mp3" },
    ]
  },
  {
    id: "folder_shreya",
    name: "Shreya Ghoshal Special",
    description: "The nightingale of Bollywood",
    cover: "https://picsum.photos/seed/shreya/300/300",
    type: "artist_special",
    artist: "Shreya Ghoshal",
    songs: [
      { id: "sh1",  title: "Teri Meri",                 artist: "Shreya Ghoshal", album: "Bodyguard",           duration: 278, audioUrl: "/songs/71.mp3" },
      { id: "sh2",  title: "Lag Ja Gale",               artist: "Shreya Ghoshal", album: "Woh Kaun Thi",        duration: 316, audioUrl: "/songs/72.mp3" },
      { id: "sh3",  title: "Tujh Mein Rab Dikhta Hai",  artist: "Shreya Ghoshal", album: "Rab Ne Bana Di Jodi", duration: 298, audioUrl: "/songs/73.mp3" },
      { id: "sh4",  title: "Dola Re Dola",              artist: "Shreya Ghoshal", album: "Devdas",              duration: 348, audioUrl: "/songs/74.mp3" },
      { id: "sh5",  title: "Tum Kya Mile",              artist: "Shreya Ghoshal", album: "Rocky Aur Rani",      duration: 318, audioUrl: "/songs/75.mp3" },
      { id: "sh6",  title: "Sunn Raha Hai",             artist: "Shreya Ghoshal", album: "Aashiqui 2",          duration: 286, audioUrl: "/songs/76.mp3" },
      { id: "sh7",  title: "Manma Emotion",             artist: "Shreya Ghoshal", album: "Dilwale",             duration: 218, audioUrl: "/songs/77.mp3" },
    ]
  },
  {
    id: "folder_neha",
    name: "Neha Kakkar Special",
    description: "Party anthems and peppy hits",
    cover: "https://picsum.photos/seed/neha/300/300",
    type: "artist_special",
    artist: "Neha Kakkar",
    songs: [
      { id: "nk1",  title: "O Saki Saki",         artist: "Neha Kakkar", album: "Batla House",      duration: 234, audioUrl: "/songs/81.mp3" },
      { id: "nk2",  title: "Dilbar",              artist: "Neha Kakkar", album: "Satyameva Jayate", duration: 218, audioUrl: "/songs/82.mp3" },
      { id: "nk3",  title: "Aankh Marey",         artist: "Neha Kakkar", album: "Simmba",           duration: 224, audioUrl: "/songs/83.mp3" },
      { id: "nk4",  title: "Ghar More Pardesiya", artist: "Neha Kakkar", album: "Kalank",           duration: 318, audioUrl: "/songs/84.mp3" },
      { id: "nk5",  title: "Hauli Hauli",         artist: "Neha Kakkar", album: "De De Pyaar De",   duration: 216, audioUrl: "/songs/85.mp3" },
      { id: "nk6",  title: "Coca Cola",           artist: "Neha Kakkar", album: "Luka Chuppi",      duration: 208, audioUrl: "/songs/86.mp3" },
      { id: "nk7",  title: "Nikle Currant",       artist: "Neha Kakkar", album: "Single",           duration: 198, audioUrl: "/songs/87.mp3" },
    ]
  },
  {
    id: "folder_sonu",
    name: "Sonu Nigam Special",
    description: "Golden voice, timeless classics",
    cover: "https://picsum.photos/seed/sonu/300/300",
    type: "artist_special",
    artist: "Sonu Nigam",
    songs: [
      { id: "sn1",  title: "Kal Ho Na Ho",          artist: "Sonu Nigam", album: "Kal Ho Na Ho",            duration: 340, audioUrl: "/songs/91.mp3" },
      { id: "sn2",  title: "Abhi Mujh Mein Kahin",  artist: "Sonu Nigam", album: "Agneepath",               duration: 312, audioUrl: "/songs/92.mp3" },
      { id: "sn3",  title: "Sandese Aate Hain",      artist: "Sonu Nigam", album: "Border",                  duration: 386, audioUrl: "/songs/93.mp3" },
      { id: "sn4",  title: "Suraj Hua Maddham",      artist: "Sonu Nigam", album: "Kabhi Khushi Kabhi Gham", duration: 368, audioUrl: "/songs/94.mp3" },
      { id: "sn5",  title: "Ek Pal Ka Jeena",        artist: "Sonu Nigam", album: "Kaho Naa Pyaar Hai",      duration: 294, audioUrl: "/songs/95.mp3" },
      { id: "sn6",  title: "Dil Chahta Hai",         artist: "Sonu Nigam", album: "Dil Chahta Hai",          duration: 318, audioUrl: "/songs/96.mp3" },
      { id: "sn7",  title: "Deewana",                artist: "Sonu Nigam", album: "Deewana",                 duration: 298, audioUrl: "/songs/97.mp3" },
    ]
  }
];

// ─── FLAT ARRAY ──────────────────────────────────────────────
export const allSongs = folders.flatMap(folder => folder.songs);

// ─── HELPERS ─────────────────────────────────────────────────
export const getFolderById  = (id) => folders.find(f => f.id === id);
export const getSongById    = (id) => allSongs.find(s => s.id === id);
export const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};