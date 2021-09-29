// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const pink = document.getElementById('pink');
const skyBlue = document.getElementById('sky-blue');
const green = document.getElementById('green');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
  
  });

