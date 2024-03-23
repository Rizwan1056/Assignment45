//Object representing information about different countries
let countries = [
    {
        name: "Pakistan",
        capital: "Islamabad.",
        population: 250000000,
        language: "urdu",
    },
    {
        name: "UAE",
        capital: "Abu Dahbi",
        population: 50000000,
        language: "arabi"
    },  
];
// Print information about each country   
//Syntax forEach loop variable.forEach(variable =>{ console.log(key.value)}); 


console.log("Information about Different Countries:");
countries.forEach(country => {
    console.log("Country: " + country.name);
    console.log("Capital: " + country.capital);
    console.log("Population: " + country.population);
    console.log("Language: " + country.language);
    console.log("------------------------");
});

