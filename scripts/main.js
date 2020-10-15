const grid = document.querySelector(".grid_container")
const createBtn = document.querySelector(".create_btn")
const resetBtn = document.querySelector(".reset_btn")


// On click, populate grid with tiles
createBtn.addEventListener("click", createGrid());

// Create the tiles inside the grid container
function createGrid() {

    // loop to create the tiles and append to the container
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement('div');
            div.className = 'grid_tile';
            grid.appendChild(div);
        }
        
    }

};