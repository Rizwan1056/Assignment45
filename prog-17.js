// Program 17- Original guest list
var guestList = ["Ali", "Ahmed", "shah", "shobi", "sami", "hadi"];
// Informing about the limitation of the dinner table
console.log("Unfortunately, the new dinner table won’t arrive in time for the dinner, and we can only invite two people for dinner.");
// Removing guests until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner this time."); // Print apology message
}
// Printing invitation messages for the two remaining guests
for (var i in guestList) {
    console.log("Dear " + guestList[i] + "\nYou're still invited to dinner. See you soon!\n");
}
console.log("Updated guest list:", guestList);
