var current_users = ['Ali', 'Jani', 'bala', 'zahid', 'waso'];
var new_users = ['majid', 'sajid', 'Jani', 'wajid', 'Ali'];
// Convert all usernames to lowercase for case-insensitive comparison
var lowercase_current_users = current_users.map(function (user) { return user.toLowerCase(); });
for (var i in new_users) {
    var new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (lowercase_current_users.includes(new_username)) {
        console.log("Sorry, " + new_users[i] + " is not available. You'll need to enter a new username.");
    }
    else {
        console.log("Congratulations! " + new_users[i] + " is available.");
        // Add the new username to the list of current users
        current_users.push(new_users[i]);
        lowercase_current_users.push(new_username);
    }
}
