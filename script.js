// --- Part 1: JavaScript Basics ---
// Variables, Data Types, Operators, Conditionals

let userName = 'Guest'; // String
let age = 18;           // Number

// Operator & Conditional Example
function greetByTime() {
  let hour = new Date().getHours();
  let greeting;
  if(hour < 12) {
    greeting = 'Good morning';
  } else if(hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  // DOM update
  document.getElementById('greeting').textContent = `${greeting}, ${userName}!`;
}
document.getElementById('startBtn').onclick = greetByTime;

// --- Part 2: Functions ---
// Custom functions for calculation and formatting

function addNumbers(a, b) {
  return a + b;
}

function formatName(name, upper) {
  // Returns formatted name; upper == true for uppercase
  return upper ? name.toUpperCase() : name[0].toUpperCase() + name.slice(1);
}

// Use functions on button click
document.getElementById('calcBtn').addEventListener('click', () => {
  let v1 = Number(document.getElementById('num1').value);
  let v2 = Number(document.getElementById('num2').value);
  let result = addNumbers(v1, v2);
  document.getElementById('calcResult').textContent = `Result: ${result}`;
});

// --- Part 3: Loops ---
// for-loop and forEach loop example

const names = ['alice', 'bob', 'charlie'];
let ul = document.getElementById('namesList');
names.forEach(name => {
  // Use formatName function
  let li = document.createElement('li');
  li.textContent = formatName(name, false);
  ul.appendChild(li);
});

// while-loop countdown example
document.getElementById('countBtn').onclick = () => {
  let countdown = 5;
  let resultDiv = document.getElementById('countResult');
  resultDiv.textContent = '';
  while(countdown > 0) {
    resultDiv.textContent += countdown + '... ';
    countdown--;
  }
  resultDiv.textContent += 'Go!';
};

// --- Part 4: DOM Interactions ---
// 1: Change text in #greeting (see greetByTime function)
// 2: Update content in #calcResult (see calcBtn click handler)
// 3: Create list items in #namesList (see names.forEach above)
// Additional: Toggle button background on click

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});
