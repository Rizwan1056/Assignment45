function showMagic(magicians:string[]):void {
    for (let i in magics) {
        console.log(magics[i]);
    }
}

function makeGreat(magicians:string[]) :void{
    for (let i in magics) {
        magics[i] = "the Great " + magics[i];
    }
}

let magics:string[] = ['Rizwan', 'Waleed', 'asim', 'Sadiq'];

makeGreat(magics);
showMagic(magics);
