const guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

const guestUnableToAttend = guestList[1];  // Assuming Marie Curie can't make it
const newGuest = "Nikola Tesla";  // Replace with the name of the new person you are inviting

console.log(guestUnableToAttend + " is unable to attend the dinner.");

guestList[1] = newGuest;  // Replace the name of the guest who can't make it with the new person

console.log("Good news! We found a bigger dinner table!");

guestList.unshift("Isaac Newton");  // Add one new guest to the beginning of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Galileo Galilei");  // Add one new guest to the middle of the array
guestList.push("Stephen Hawking");  // Add one new guest to the end of the array using the push() method

const numGuests = guestList.length;
console.log("Number of people invited to dinner: " + numGuests);

for (let i = 0; i < guestList.length; i++) {
  console.log("Dear " + guestList[i] + ", you are cordially invited to dinner. Please join us for an evening of delightful conversation and camaraderie.");
}
