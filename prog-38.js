function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log(city + " is in " + country + ".");
}
// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("London", "United Kingdom");
