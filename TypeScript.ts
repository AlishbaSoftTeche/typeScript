// Define a TypeScript interface for a country
interface Country {
  name: string;
  capital: string;
  population: number;
}

// Create objects for different countries
const country1: Country = {
  name: "United States",
  capital: "Washington, D.C.",
  population: 331002651
};

const country2: Country = {
  name: "United Kingdom",
  capital: "London",
  population: 67886011
};

const country3: Country = {
  name: "Canada",
  capital: "Ottawa",
  population: 37742154
};

console.log("Countrt 1: ");
console.log("Name : " ,country1.name);
console.log("Country Capital : ",country1.capital );
console.log("Population : " ,country1.population);

console.log("\n Countrt 2: ");
console.log("Name : " ,country2.name);
console.log("Country Capital : ",country2.capital );
console.log("Population : " ,country2.population);

console.log("Countrt 3: ");
console.log("Name : " ,country3.name);
console.log("Country Capital : ",country3.capital );
console.log("Population : " ,country3.population);