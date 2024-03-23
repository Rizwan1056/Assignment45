
let color:string[] = ["red", "green", "blue"];

console.log(color[3]); //index out of range (intentional error) [0,1,2] range

// Correcting the error by checking the array length before accessing the index
if (color.length > 3) {
    console.log(color[3]);
} else {
    console.log("Index is out of range.");
}
