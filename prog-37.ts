function make_shirt(size:string = "Large", message:string = "I love TypeScript"):void {
    console.log("You have ordered a " + size + " size shirt with the following message: \"" + message + "\"");
}

// Make a large shirt with the default message no arugument
make_shirt();

// Make a medium shirt with the default message single argument
make_shirt("Medium");

// Make a shirt of any size with a different message double arguments
make_shirt("Small", "JavaScript Rocks!");
