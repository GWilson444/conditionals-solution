const age = Number(prompt("What is your age?"));

if(age < 0) {
	console.log("Error");
} 

else if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}

else if(age < 18) {
	console.log("Sorry, you are not old enough to enter the venue");
} 

else if( age < 21) {
	console.log("You can enter, but cannot drink");
} 

else if(age === 21) {
	console.log("Happy 21st birthday!! You get a free shot!");
} 

else if(age % 2 === 1) {
	console.log("Your age is odd! But you can come in and drink!");
} 

else {
	console.log("Come on in. You can also drink");
};