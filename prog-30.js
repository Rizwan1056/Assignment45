var userNames = ['admin', 'Rizwan', 'ALi', 'Shan', 'Shobi'];
for (var i in userNames) {
    if (userNames[i] === 'Rizwan') {
        console.log("Hello " + userNames[i], " would you like to see a status report?");
    }
    else {
        console.log("Hello " + userNames[i] + ", thank you for logging in again.");
    }
}
