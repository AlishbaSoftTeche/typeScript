const secreteNumber = Math.floor(Math.random()*10)+1;      //generate a random secrete number between 1 to 10
const guess = parseInt(prompt("Guess a number between 1 to 10: "));  //Ask user to make guess
if(guess === secreteNumber){
    console.log("Congratulation ! , your guess is right " ); //will print this massege if guess was right

}else{
    console.log("OOPS !,your guess is wrong " , secreteNumber); //will print this massege if guess was wrong
}

// Program to calculate the area of a circle

const radius = 5;  // Radius of the circle
const area = Math.PI * radius**2;  // Calculate the area using the formula: π * r^2

console.log("The area of the circle is:", area);
