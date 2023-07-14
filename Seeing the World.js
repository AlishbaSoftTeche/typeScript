const placeToVisit = ["Pakistan" , "Korea" , "Japan","Germany","India"];

console.log("Orignal array : ",placeToVisit);
console.log("Alphabetical order of Place to visit : " , [...placeToVisit].sort());
console.log("array still in orignal state : " , placeToVisit);
console.log("Array in reverse alphabetical order: " ,[...placeToVisit].sort().reverse());
console.log("orignal array : " ,placeToVisit);

placeToVisit.reverse();
console.log("reversed order : ",placeToVisit);

placeToVisit.reverse();
console.log("Back to orignal : " ,placeToVisit);

console.log("Alphabetical order of Place to visit : " , [...placeToVisit].sort());
console.log("Alphabetical order of Place to visit : " , [...placeToVisit].sort().reverse());