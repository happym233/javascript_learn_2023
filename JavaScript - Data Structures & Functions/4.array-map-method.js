const bestSongs = [
  {
    artist: "Bob Dylan",
    song: "Like a Rolling Stone",
  },

  {
    artist: "John Lennon",
    song: "Imagine",
  },

  {
    artist: "Chuck Berry",
    song: "Johnny B. Goode",
  },

  {
    artist: "Aretha Franklin",
    song: "Respect",
  },

  {
    artist: "The Beatles",
    song: "Hey Jude",
  },

  {
    artist: "Ray Charles",
    song: "What'd I Say",
  },
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let artists = bestSongs.map((bestSong) => bestSong.artist);
console.log(artists);
