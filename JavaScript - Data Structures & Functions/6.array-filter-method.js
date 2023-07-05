const bestSongs = [
  {
    artist: "Bob Dylan",
    song: "Like a Rolling Stone",
    year: 1965,
  },

  {
    artist: "John Lennon",
    song: "Imagine",
    year: 1971,
  },

  {
    artist: "Chuck Berry",
    song: "Johnny B. Goode",
    year: 1958,
  },

  {
    artist: "Aretha Franklin",
    song: "Respect",
    year: 1967,
  },

  {
    artist: "The Beatles",
    song: "Hey Jude",
    year: 1968,
  },

  {
    artist: "Ray Charles",
    song: "What'd I Say",
    year: 1959,
  },
];

let songYears = bestSongs.filter((songYear) => songYear.year >= 1965);
console.log(songYears);
