//program-13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
var transport = ["Civic_car", "Honda_bike", "Honda-125", "Corolla", "BMW"];
for (var i in transport) {
    console.log("I would like to my own -" + transport[i]);
}
