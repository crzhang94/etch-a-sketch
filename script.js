// DOM Elements
const grid = document.querySelector('.grid');
const slider = document.getElementById('grid-slider');
const gridSize = document.getElementById('grid-size');
const clear = document.getElementById('clear');
const color = document.getElementById('brush-color');

// Make initial grid
makeGrid();

// Output slider value to size display and adjust grid size
gridSize.innerHTML = slider.value + " x " + slider.value;
slider.oninput = function() {
    gridSize.innerHTML = this.value + " x " + this.value;
    grid.style.gridTemplateColumns = "repeat(" + slider.value + " ,1fr)";
    grid.style.gridTemplateRows = "repeat(" + slider.value + " ,1fr)";
    
    resetGrid();
    makeGrid();
}

// Clear grid when user hits clear button
clear.addEventListener('click', () => {
    resetGrid();
})

// Make a square div
function makeDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    grid.appendChild(newDiv);
    
    // Set up "hover effect" so that square changes color when your mouse passes over 
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = color.value;
    })
}

// Make a grid
function makeGrid() {
    // Go through rows
    for (i = 0; i < slider.value; i++) {
        // Go through columns
        for (j = 0; j < slider.value; j++) {
            makeDiv();
        } 
    } 
}

// Clear the grid
function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}

