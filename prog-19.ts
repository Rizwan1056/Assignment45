// Array of friends' names
let names_friend: string[] = ["Ali", "Babu", "Chanda", "Dilmurad"];

// Personalized greeting for each person
for (let i in names_friend) {
  console.log("Hello, " + names_friend[i] + " Have a great day-!");
}
// Print the number of people invited to dinner
console.log("Number of people invited to dinner -: " + names_friend.length);
