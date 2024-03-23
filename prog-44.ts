function make_sandwich(...items:string[]):void{
    console.log("Making a sandwich with the following items:");
    for (let i in items) {
        console.log("- " + items[i]);
    }
}

// Call the function with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Swiss Cheese');
