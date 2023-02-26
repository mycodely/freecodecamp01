const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },

  {
    "artist": "Foo Figthers",
    "title": "The Colour and the Shape",
    "release_year": 1997,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },

];


function addData(artist,t1,release_year,formats,gold) {
myMusic.artist = artist;
myMusic.title = t1;
myMusic.release_year = release_year;
myMusic.formats = formats;
myMusic.gold = gold;

}
addData()
