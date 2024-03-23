function show_magicians(magicians:string[]):void {
    for (let i in magicians) {
        console.log(magicians[i]);
    }
}

function make_great(magicians:string[]) :any{
    let great_magicians = [];
    for (let i in magicians) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}

let magicians:string[] = ['Dani', 'Copper', 'Shan', 'Zahid'];

let great_magicians = make_great(magicians.slice()); // Pass a copy of the array

console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
