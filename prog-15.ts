//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Original guest list.
let guest:string[] = ["Sir Zia Khan", "Sir Daniyal Nagori", "Sir Ameen Alam"];

// Guest who can't make it
let guest_missing:string = "Sir Daniyal Nagori";

// Finding the index of the guest who can't make it
let Unavailable_Guests:number = guest.indexOf(guest_missing);

// If the guest is found, replace them with a new guest
if (Unavailable_Guests == 1) {
    guest[Unavailable_Guests] = "Sir Okasha "; // New guest to invite
}
// Sending out invitations
for (let i in guest) {
    console.log("Respected-" + guest[i] + ",\nKhush Aamdeed  to dinner. WellCome Sain .\nSincerely,\nRizwan Ahmed\n");
    }

