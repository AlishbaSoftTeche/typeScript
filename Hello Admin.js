const names = ["Alishba", "Haider", "Nabeelah", "Admin"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Admin") {
    console.log("Hello admin, would you like to take a status report?");
  } else {
    console.log("Thank you", names[i], "for logging in again.");
  }
}
