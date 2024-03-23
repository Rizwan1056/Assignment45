//console.log('\x1b[31m%s\x1b[0m', 'red!');     // 31-red, 32-green  ,  33-yellow
var alienColor1 = "green";
if (alienColor1 === "green") {
    console.log('\x1b[32m%s\x1b[0m', "The Alein Green earned 5 points.");
}
else if (alienColor1 === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColor1 === "red") {
    console.log("The player earned 15 points.");
}
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor2 === "yellow") {
    console.log('\x1b[33m%s\x1b[0m', "The Alein Yellow earned 10 points.");
}
else if (alienColor2 === "red") {
    console.log("The player earned 15 points.");
}
var alienColor = "red";
if (alienColor === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColor === "red") {
    console.log('\x1b[31m%s\x1b[0m', "The Alein Red earned 15 points.");
}
