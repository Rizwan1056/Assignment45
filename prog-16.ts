/*program 16 -More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// Original guest list.
let guests:string[] = ["Sir Zeeshan Hanif","Sir Ameen Alam", "Madam Hira"];

// Guest who can't make it
let guest_Unavailable:string = "Sir Ameen Alam";

// Finding the index of the guest who can't make it
let Unavailable_Guest:number = guests.indexOf(guest_Unavailable);

// If the guest is found, replace them with a new guest
if (Unavailable_Guest == 1) {
    guests[Unavailable_Guest] = "Sir Oshaka"; // New guest to invite
}
// Informing about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Adding new guests
guests.unshift("Sir Zia Khan"); // Add one new guest to the beginning
guests.splice(Math.ceil(guests.length / 2), 0, "Sir Daniyal Nagori"); // Add one new guest to the middle
guests.push("Sir Sachal Joyo"); // Add one new guest to the end

// Sending out invitations
for (let i in guests) {
    console.log("Respected-" + guests[i] + ",\n WellCome Wellcome for Bigger Deal Dinner .\n");
    }

