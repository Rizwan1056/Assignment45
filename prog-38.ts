function describe_city(city:string, country:string = "USA"):void {
    console.log(city + " is in " + country + ".");
}

// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("London", "United Kingdom");
