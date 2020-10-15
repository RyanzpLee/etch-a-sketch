const grid = document.querySelector('.grid_container');
const reset = document.querySelector('.reset_btn');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');
const gridHeight = grid.clientHeight;

let colour = '#000000';
let rows = 16;

// Inital grid on page load
window.onload = createGrid();

function setColour(col) {
  colour = col;
}

slider.addEventListener('input', () => {
  grid.innerHTML = '';
  rows = slider.value;
  sliderValue.textContent = slider.value;
  createGrid();
});

function displaySliderValue() {}

// Reset grid on click
reset.addEventListener('click', () => {
  grid.innerHTML = '';
  rows = 16
  createGrid();
});

// Create the tiles inside the grid container
function createGrid() {
  let tileHeight = gridHeight / rows - 2 + 'px';
  let tileWidth = tileHeight;

  // loop to create the tiles and append to the container
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      let div = document.createElement('div');
      div.className = 'grid_tile';
      div.style.height = tileHeight;
      div.style.width = tileWidth;
      grid.appendChild(div);
    }
  }

  // Hover over tiles to change colour
  document.querySelectorAll('.grid_tile').forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = colour;
    });
  });
}
