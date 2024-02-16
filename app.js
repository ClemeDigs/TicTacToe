let cells = document.querySelectorAll('.cell')
let button = document.querySelector('.button')
let i = 1;

/*for(let cell of cells){
    cell.addEventListener('click', () => {
        if(cell.textContent === 'X'){
            cell.textContent = 'O';
        }
        else{
            cell.textContent = 'X';
        }
    })
}*/

button.addEventListener('click', () => {
    for(let cell of cells){
        cell.textContent = '';
    }
    turn = 1;
});

/*
for (let cell of cells) {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            if (i % 2 === 0) {
                cell.textContent = 'X';
            } else {
                cell.textContent = 'O';
            }
            i++;
        }
    });
}


for (let cell of cells) {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            if (i % 2) {
                cell.textContent = 'X';
            } else {
                cell.textContent = 'O';
            }
            i++;
        }
    });
}
*/

for (let cell of cells) {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = i % 2 ? 'X' : 'O';
            i++;
        }
    });
}


