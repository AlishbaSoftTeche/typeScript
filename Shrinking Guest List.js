const guestlist = ["Nabeelah","Haider","Ali","Alishba"];
const maxguest = 2;
console.log(" Apologies! The new dinner table won't arrive in time. We can only invite two people for dinner.");
while (guestlist.length > maxguest){
    const removeguest = guestlist.pop();
    console.log("Sorry "+removeguest+" . We can't invite you to dinner this time.")
}

console.log("Dear "+guestlist[0]+" , you're still invited to dinner. Please join us for an evening of delightful conversation and camaraderie.")
console.log("Dear"  +guestlist[1]+" , you're still invited to dinner. Please join us for an evening of delightful conversation and camaraderie.")

guestlist.splice(0);    // Remove the remaining names from the list

console.log("Guest list after removing some of guest :" , guestlist);