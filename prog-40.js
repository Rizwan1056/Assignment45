function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = null; }
    var album = {
        artist: artist,
        title: title,
        tracks: tracks,
    };
    return album;
}
var album1 = make_album("Geet Mala", "1989"); // Create albums without specifying the number of tracks
var album2 = make_album("Aadat", "Atif Aslam");
var album3 = make_album("Noha", "Nadeem Sarwar", 10); // Create an album with the number of tracks specified
console.log(album1); // Invoke function
console.log(album2);
console.log(album3);
