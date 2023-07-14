const guestlist = ["Nabeelah","Haider","Ali","Alishba"]
const guestUnableToAttend = guestlist[3];

const newguest = "Rabia Abbas";

console.log(guestUnableToAttend +" is unable to attend the dinner")
guestlist[3]=newguest;


for(let i=0;i<guestlist.length;i++){
    console.log("Dear "+guestlist[i]+", you are cordially invited to dinner.  Please join us for an evening of delightful conversation and camaraderie.")
}