//Your character's name will remain the same throughout the duration of the game. 
//TODO: Declare a variable for your character's name
const NAME;

//Creates a variable to keep track of the number of steps your character has taken
let totalSteps = 0;

//Creates an object that keeps track of the number of steps taken in each direction
let stepsTracker = {
  forward: 0,
  backward: 0,
  left: 0,
  right: 0,
  newGame: function(){
    //TODO: Reset each direction of the stepsTracker object to zero


    //TODO: Reset the total steps to zero
   

    //TODO: Log a message to the console to show that a new game has started
    
  },
  /*BONUS: Add an object method that determines whether or not the character is in the location they started at. This function should return true or false. (This can be written inside the object as an object method OR outside of the object as a global function)*/
}

function goForward(){
  //Prints to the console which direction the character steps in
  console.log(NAME + " moves one step forward.");
  
  //Adds 1 to the total number of steps taken
  totalSteps = totalSteps + 1;
  
  //Updates steps tracker
  stepsTracker.forward++;
}

function goBackward(){
  //Prints to the console which direction the character steps in
  console.log(`${NAME} moves one step backward.`);
  
  //Adds 1 to the total number of steps taken
  totalSteps++;
  
  //Updates steps tracker
  stepsTracker.backward++;
}

function goLeft(){
  //Prints to the console which direction the character steps in
  console.log(NAME + " moves one step to the left.");
  
  //Adds 1 to the total number of steps taken
  totalSteps++;
  
  //Updates steps tracker
  stepsTracker.left++;
}

function goRight(){
  //Prints to the console which direction the character steps in
  console.log(`${NAME} moves one step to the right.`);
  
  //Adds 1 to the total number of steps taken
  totalSteps++;
  
  //Updates steps tracker
  stepsTracker.right++;
}

function printTotalSteps(){
  //Print to the console how many steps the character has taken
  console.log(`${NAME} has taken ${totalSteps} steps`);
}

function printAllSteps(){
  //TODO: Log to the console the number of steps the character has taken in each direction.

}

//(Bonus) Is the character at the starting location?
function printAtStart(){
  //Call this function when "Are we at the start?" button is clicked
  if(true /* character is at starting location*/)
    console.log(NAME + " is back to where she started.");
  else
    console.log(NAME + " is not back to where she started.")
}