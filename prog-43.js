function show_magicians(magicians) {
    for (var i in magicians) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var i in magicians) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}
var magicians = ['Dani', 'Copper', 'Shan', 'Zahid'];
var great_magicians = make_great(magicians.slice()); // Pass a copy of the array
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
