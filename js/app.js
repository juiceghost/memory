// Memory
const myTable = document.querySelector('.board')
// Skapa en array

// denna array innehåller "värdena" på korten i form av emojis.
// det ska finnas 12 kort. antalet kort måste vara jämnt delbara med 2
// 

/*
🍇 Grapes
🍈 Melon
🍉 Watermelon
🍊 Tangerine
🍋 Lemon
🍌 Banana
*/

//const gameBoard = ['🍇', '🍈', '🍋', '🍌', '🍊', '🍉', '🍇', '🍈', '🍋', '🍌', '🍊', '🍉']
function createBoard() {
    console.log("Hej från createBoard")
    // Skapa arrayen som innehåller korten
    // dels kortens emoji och dels ordningen
    // 
    const gameBoard = ['🍇', '🍈', '🍋', '🍌', '🍊', '🍉', '🍇', '🍈', '🍋', '🍌', '🍊', '🍉']
    // Rita ut samma antal kort på sidan som vi har element i arrayen
    // hur får vi reda på hur många element vi har i arrayen? svar: array.length
    // generera ett kort i dom:en för varje element som finns i arrayen
    //gameBoard.length
    const cardBack = document.createElement('img');
    cardBack.src = 'img/back3.png';
    cardBack.style.maxWidth = '80px';
    cardBack.style.margin = '4px';

    //for (initialExpression; condition; incrementExpression)

    for (let i = 0; i < gameBoard.length; i = i + 1) {
        myTable.appendChild(cardBack.cloneNode(true));
    }


    /*
    const e = document.createElement('div');
    e.innerHTML = 'JavaScript DOM';
    document.body.appendChild(e);*/
}

createBoard();
function clickCard() {
    // ...
}