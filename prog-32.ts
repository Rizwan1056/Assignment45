let current_users:string[] = ['Ali', 'Jani', 'bala', 'zahid', 'waso'];
let new_users:string[] = ['majid', 'sajid', 'Jani', 'wajid', 'Ali'];

// Convert all usernames to lowercase for case-insensitive comparison
let lowercase_current_users = current_users.map(user => user.toLowerCase());

for (let i in new_users) {
    let new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    
    if (lowercase_current_users.includes(new_username)) {
        console.log("Sorry, " + new_users[i] + " is not available. You'll need to enter a new username.");
    } else {
        console.log("Congratulations! " + new_users[i] + " is available.");
        // Add the new username to the list of current users
        current_users.push(new_users[i]);
        lowercase_current_users.push(new_username);
    }
}
