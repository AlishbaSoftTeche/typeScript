const guestlist = ["Nabeelah","Haider","Ali","Alishba"]
const guestUnableToAttend = guestlist[3];

const newguest = "Rabia Abbas";

console.log(guestUnableToAttend +" is unable to attend the dinner")
guestlist[3]=newguest;

console.log("Good news ! We have Found a bigger table ");
guestlist.unshift("samia") //add guest at the start of array
guestlist.splice(Math.floor(guestlist.length/2),0 ,"asad") //add guest at the middle of the array
guestlist.push("Misbah")  //add name at the end of the array

for(let i=0;i<guestlist.length;i++){
    console.log("Dear "+guestlist[i]+", you are cordially invited to dinner.  Please join us for an evening of delightful conversation and camaraderie.")
}