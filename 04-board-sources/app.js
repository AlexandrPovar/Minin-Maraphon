const board = document.querySelector('#board');
const colors = ['#5bfff6', '#e980dd', '#26ff2bb8' , '#feff00b8', '#ff3d3d', '#f8a733'];
const SQUARE_NUMBER = 500;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
    setColor(square));

    square.addEventListener('mouseleave', () => 
    removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d`;

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}



