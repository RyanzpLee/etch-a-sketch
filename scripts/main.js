const grid = document.querySelector(".grid_container");
const resetBtn = document.querySelector(".reset_btn");

// Inital grid on page load
window.onload = createGrid(16);

// Reset grid on click
resetBtn.addEventListener("click", () => {
    grid.innerHTML = '';
    createGrid(16);
})


// Create the tiles inside the grid container
function createGrid(rows) {
    console.log("created")
    // loop to create the tiles and append to the container
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            let div = document.createElement('div');
            div.className = 'grid_tile';
            grid.appendChild(div);
        }   
    }
};


// Hover over tiles to change colour
document.querySelectorAll('.grid_tile').forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";
    });
})