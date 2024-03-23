var letter = " rizwAn ahmed sOomro : ";
console.log(letter.toLowerCase());
console.log(letter.toUpperCase());
console.log(letter.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// function toTitleCase(str: string): string {
//     return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
// }
// console.log(toTitleCase(letter));
