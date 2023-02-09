// Memory
const myBoard = document.querySelector('.board') // ett element, ALLTID

const gameBoard = ['🍇', '🍈', '🍋', '🍌', '🍊', '🍉', '🍇', '🍈', '🍋', '🍌', '🍊', '🍉']
function createBoard() {
    console.log("Hej från createBoard")
    // Skapa arrayen som innehåller korten
    // dels kortens emoji och dels ordningen
    // 
    //const gameBoard = ['🍇', '🍈', '🍋', '🍌', '🍊', '🍉', '🍇', '🍈', '🍋', '🍌', '🍊', '🍉']
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
        myBoard.appendChild(cardBack.cloneNode(true));
    }

    myBoard.addEventListener('click', clickCard)

    /*
    const e = document.createElement('div');
    e.innerHTML = 'JavaScript DOM';
    document.body.appendChild(e);*/
}

createBoard();
const allCards = document.querySelectorAll('.board > img') // en NodeList av element, ALLTID 


function clickCard(evt) {
    // Gör så att denna funktion körs vid ett click på ett kort
    console.log("Hej från clickCard")
    console.log(evt)

    // om användaren inte klickat på ett av korten, gör ingenting
    if (evt.target.tagName != 'IMG') {
        //console.log("Du failade på att klicka på en bild")
        return
    }

    console.log("Grattis, du lyckades klicka på en bild")
    // Vad har jag egentligen klickat på?


    // Vid ett klick inuti board-diven
    // vill jag ha vilket INDEX i allCards ajg klickat på, dvs vilket index i allCards motsvarar klickad img
    // skriv ut motsvarande emoji ur gameBoard som har samma index.

    // den img i klickat finns i event.target

    const allCardsArray = [...allCards];
    const clickedIndex = allCardsArray.indexOf(evt.target);
    console.log(clickedIndex)


}
