// DOM Elements

const grid = document.querySelector('.grid');
const resize = document.getElementById('resize');

// Create a 16 x 16 grid of square divs

// Make a square div
function makeDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    grid.appendChild(newDiv);

    // Set up "hover effect" so that square changes color when your mouse passes over 
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = "black";
    })
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

// Resize button sends a popup asking for user input for grid size
resize.addEventListener('click', () => {
    prompt("Please enter desired number of squares per grid edge: _ x _");
})

// Set the limit for user input to a max of 100