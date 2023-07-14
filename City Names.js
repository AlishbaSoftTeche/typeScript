function city_country(city,country){
    return `"${city},${country}"`;
}

let formattedString1 = city_country("Lahore","Pakistan");
let formattedString2 = city_country("Paris","France");
let formattedString3 = city_country("New York","America")

console.log(formattedString1);
console.log(formattedString2);
console.log(formattedString3);