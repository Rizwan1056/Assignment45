function make_album(artist: string, title: string, tracks: any=null): any {
  let album = {
    artist: artist,
    title: title,
    tracks: tracks,
  };
  return album;
}
let album1 = make_album("Geet Mala", "1989"); // Create albums without specifying the number of tracks
let album2 = make_album("Aadat", "Atif Aslam");
let album3 = make_album("Noha", "Nadeem Sarwar", 10); // Create an album with the number of tracks specified

console.log(album1); // Invoke function
console.log(album2);
console.log(album3);
