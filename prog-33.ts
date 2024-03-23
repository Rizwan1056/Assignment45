let numb :number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numb) {
    let num = numb[i];
    let ordinal:string;

    if (num === 1) {
        ordinal = "st";
    } else if (num === 2) {
        ordinal = "nd";
    } else if (num === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(num + ordinal);
}
