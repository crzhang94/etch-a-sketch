const grid = document.querySelector('.grid');
const resize = document.getElementById('resize');
const erase = document.getElementById('erase');

// Sets default size to 16x16 at start
let size = 16;

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
    for (i = 0; i < size; i++) {
        // Go through columns
        for (j = 0; j < size; j++) {
            makeDiv();
        } 
    } 
}

makeGrid();

// Prompt user for size input when hitting resize button and creates new grid
resize.addEventListener('click', () => {
    do {
        size = prompt("Please enter desired number of squares per grid edge (2-100):");
    } 
    while (size < 2 || size > 100 || !isFinite(size));

    grid.style.gridTemplateColumns = "repeat(" + size + " ,1fr)";
    grid.style.gridTemplateRows = "repeat(" + size + " ,1fr)";
    
    resetGrid();
    makeGrid();
    
})

erase.addEventListener('click', () => {
    resetGrid();
})

// Clear the grid
function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}

