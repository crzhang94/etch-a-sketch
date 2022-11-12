// DOM Elements

const grid = document.querySelector('.grid');


// STEPS

// Create a 16 x 16 grid of square divs

// Make a square div
function makeDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    grid.appendChild(newDiv);
}

// Make a grid
function makeGrid() {
    // Go through rows
    for (i = 0; i < 16; i++) {
        // Go through columns
        for (j = 0; j < 16; j++) {
            makeDiv();
        } 
    } 
    
}

makeGrid();

// Set up a "hover effect" so that squares change color when your mouse passes over them, leaving a pixelated trail


// Add a button to the top of the screen that sends a popup asking for number of squares per side fot the new grid (generates in the same TOTAL SPACE as before and replaces old grid)

// Set the limit for user input to a max of 100