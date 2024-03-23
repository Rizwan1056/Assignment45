function showMagic(magicians) {
    for (var i in magics) {
        console.log(magics[i]);
    }
}
function makeGreat(magicians) {
    for (var i in magics) {
        magics[i] = "the Great " + magics[i];
    }
}
var magics = ['Rizwan', 'Waleed', 'asim', 'Sadiq'];
makeGreat(magics);
showMagic(magics);
