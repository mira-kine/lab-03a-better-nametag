// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const button1 = document.getElementById('pink');
const button2 = document.getElementById('skyBlue');
const button3 = document.getElementById('green');
const pronounInput = document.getElementById('pronoun')
//const button4 = document.getElementById('input');
const myPronoun = document.getElementById('myPronoun');
//let count = 0;
const counterSpan = document.getElementById('counter');
let counter = 0;
counterSpan.textContent = counter;


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
    let newPronoun = pronounInput.value;
    myPronoun.textContent = newPronoun;
    counter = counter + 1;
    counterSpan.textContent = counter;
  });

  //button.addEventListener('click', ()=>{
    //let newPronoun = pronounInput.value;
    //myProNoun.textContent = newPronoun;
  //});

  button1.addEventListener('click', ()=>{
    document.getElementById('header').style.backgroundColor = 'pink';
    document.getElementById('footer').style.backgroundColor = 'pink';
  });

  button2.addEventListener('click', ()=>{
    document.getElementById('header').style.backgroundColor = 'skyBlue';
    document.getElementById('footer').style.backgroundColor = 'skyBlue';
  });

  button3.addEventListener('click', ()=>{
    document.getElementById('header').style.backgroundColor = 'green';
    document.getElementById('footer').style.backgroundColor = 'green';
  });
