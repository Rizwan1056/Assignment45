let letter = " rizwAn ahmed sOomro : ";

console.log(letter.toLowerCase());
console.log(letter.toUpperCase());
console.log(letter.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));

