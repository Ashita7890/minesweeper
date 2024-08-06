
// let board = [];
// let rows = 8;
// let columns = 8;

// let minesCount = 10;
// let minesLocation = []; 

// let tilesClicked = 0; //goal to click all tiles except the ones containing mines
// let flagEnabled = false;

// let gameOver = false;
// let flagCount = 0;
// let timer;
// let time = 0;


// window.onload = function() {
//     startGame();
// }

// function setMines() {
    
//     let minesLeft = minesCount;
//     while (minesLeft > 0) { 
//         let r = Math.floor(Math.random() * rows);
//         let c = Math.floor(Math.random() * columns);
//         let id = r.toString() + "-" + c.toString();

//         if (!minesLocation.includes(id)) {
//             minesLocation.push(id);
//             minesLeft -= 1;
//         }
//     }
// }


// function startGame() {
//     document.getElementById("mines-count").innerText = minesCount;
//     document.getElementById("flag-button").addEventListener("click", setFlag);
//     setMines();

    
//     for (let r = 0; r < rows; r++) {
//         let row = [];
//         for (let c = 0; c < columns; c++) {
//             //<div id="0-0"></div>
//             let tile = document.createElement("div");
//             tile.id = r.toString() + "-" + c.toString();
//             tile.addEventListener("click", clickTile);
//             document.getElementById("board").append(tile);
//             row.push(tile);
//         }
//         board.push(row);
//     }

//     console.log(board);
// }

// function setFlag() {
//     if (flagEnabled) {
//         flagEnabled = false;
//         document.getElementById("flag-button").style.backgroundColor = "lightgray";
//     }
//     else {
//         flagEnabled = true;
//         document.getElementById("flag-button").style.backgroundColor = "darkgray";
//     }
// }

// function clickTile()
//  {
//         if (gameOver || this.classList.contains("tile-clicked")) {
//             return;
//         }
    
//         if (!timer) {
//             startTimer();  // Start the timer when the first tile is clicked
//         }
    
//         let tile = this;
//         if (flagEnabled) {
//             if (tile.innerText == "") {
//                 tile.innerText = "🚩";
//             } else if (tile.innerText == "🚩") {
//                 tile.innerText = "";
//             }
//             updateFlagCount();
//             return;
//         }
    
//         if (minesLocation.includes(tile.id)) {
//             gameOver = true;
//             revealMines();
//             stopTimer();  // Stop the timer when game is over
//             return;
//         }
    
//         let coords = tile.id.split("-");
//         let r = parseInt(coords[0]);
//         let c = parseInt(coords[1]);
//         checkMine(r, c);
//     }

// function revealMines() {
//     for (let r= 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             let tile = board[r][c];
//             if (minesLocation.includes(tile.id)) {
//                 tile.innerText = "💣";
//                 tile.style.backgroundColor = "red";                
//             }
//         }
//     }
// }

// function checkMine(r, c) {
//     if (r < 0 || r >= rows || c < 0 || c >= columns) {
//         return;
//     }
//     if (board[r][c].classList.contains("tile-clicked")) {
//         return;
//     }

//     board[r][c].classList.add("tile-clicked");
//     tilesClicked ++;

//     let minesFound = 0;

//     //top 3
//     minesFound += checkTile(r-1, c-1);      //top left
//     minesFound += checkTile(r-1, c);        //top 
//     minesFound += checkTile(r-1, c+1);      //top right

//     //left and right
//     minesFound += checkTile(r, c-1);        //left
//     minesFound += checkTile(r, c+1);        //right

//     //bottom 3
//     minesFound += checkTile(r+1, c-1);      //bottom left
//     minesFound += checkTile(r+1, c);        //bottom 
//     minesFound += checkTile(r+1, c+1);      //bottom right

//     if (minesFound > 0) {
//         board[r][c].innerText = minesFound;
//         board[r][c].classList.add("x" + minesFound.toString());
//     }
//     else {
//         board[r][c].innerText = "";
        
//         //top 3
//         checkMine(r-1, c-1);    //top left
//         checkMine(r-1, c);      //top
//         checkMine(r-1, c+1);    //top right

//         //left and right
//         checkMine(r, c-1);      //left
//         checkMine(r, c+1);      //right

//         //bottom 3
//         checkMine(r+1, c-1);    //bottom left
//         checkMine(r+1, c);      //bottom
//         checkMine(r+1, c+1);    //bottom right
//     }

//     if (tilesClicked == rows * columns - minesCount) {
//         document.getElementById("mines-count").innerText = "Cleared";
//         gameOver = true;
//         stopTimer();
//     }
// }

// function checkTile(r, c) {
//     if (r < 0 || r >= rows || c < 0 || c >= columns) {
//         return 0;
//     }
//     if (minesLocation.includes(r.toString() + "-" + c.toString())) {
//         return 1;
//     }
//     return 0;
// }
// function startTimer() {
//     time = 0;
//     timer = setInterval(() => {
//         time++;
//         document.getElementById("timer").innerText = "Timer: " + time;
//     }, 1000);
// }

// function stopTimer() {
//     clearInterval(timer);
// }
// function setFlag() {
//     if (flagEnabled) {
//         flagEnabled = false;
//         document.getElementById("flag-button").style.backgroundColor = "lightgray";
//     } else {
//         flagEnabled = true;
//         document.getElementById("flag-button").style.backgroundColor = "darkgray";
//     }
    
//     updateFlagCount();
// }

// function updateFlagCount() {
//     flagCount = 0;
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             if (board[r][c].innerText == "🚩") {
//                 flagCount++;
//             }
//         }
//     }
//     document.getElementById("flag-count").innerText = "Flags: " + flagCount;
// }


let board = [];
let rows = 8;
let columns = 8;

let minesCount = 10;
let minesLocation = []; 

let tilesClicked = 0; //goal to click all tiles except the ones containing mines
let flagEnabled = false;

let gameOver = false;
let flagCount = 0;
let timer;
let time = 0;

// Access audio elements
let clickSound = document.getElementById('click-sound');
let bombSound = document.getElementById('bomb-sound');
let winSound = document.getElementById('win-sound');

window.onload = function() {
    startGame();
}

function setMines() {
    let minesLeft = minesCount;
    while (minesLeft > 0) { 
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}

function startGame() {
    document.getElementById("mines-count").innerText = minesCount;
    document.getElementById("flag-button").addEventListener("click", setFlag);
    setMines();

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
}

function setFlag() {
    if (flagEnabled) {
        flagEnabled = false;
        document.getElementById("flag-button").style.backgroundColor = "lightgray";
    } else {
        flagEnabled = true;
        document.getElementById("flag-button").style.backgroundColor = "darkgray";
    }
    
    updateFlagCount();
}

function clickTile() {
    if (gameOver || this.classList.contains("tile-clicked")) {
        return;
    }

    if (!timer) {
        startTimer();  // Start the timer when the first tile is clicked
    }

    let tile = this;
    clickSound.play(); // Play click sound when a tile is clicked

    if (flagEnabled) {
        if (tile.innerText == "") {
            tile.innerText = "🚩";
        } else if (tile.innerText == "🚩") {
            tile.innerText = "";
        }
        updateFlagCount();
        return;
    }

    if (minesLocation.includes(tile.id)) {
        gameOver = true;
        revealMines();
        bombSound.play(); // Play bomb sound if mine is clicked
        stopTimer();  // Stop the timer when game is over
        return;
    }

    let coords = tile.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);
}

function revealMines() {
    for (let r= 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if (minesLocation.includes(tile.id)) {
                tile.innerText = "💣";
                tile.style.backgroundColor = "red";                
            }
        }
    }
}

function checkMine(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }
    if (board[r][c].classList.contains("tile-clicked")) {
        return;
    }

    board[r][c].classList.add("tile-clicked");
    tilesClicked++;

    let minesFound = 0;

    //top 3
    minesFound += checkTile(r-1, c-1);      //top left
    minesFound += checkTile(r-1, c);        //top 
    minesFound += checkTile(r-1, c+1);      //top right

    //left and right
    minesFound += checkTile(r, c-1);        //left
    minesFound += checkTile(r, c+1);        //right

    //bottom 3
    minesFound += checkTile(r+1, c-1);      //bottom left
    minesFound += checkTile(r+1, c);        //bottom 
    minesFound += checkTile(r+1, c+1);      //bottom right

    if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound.toString());
    } else {
        board[r][c].innerText = "";
        
        //top 3
        checkMine(r-1, c-1);    //top left
        checkMine(r-1, c);      //top
        checkMine(r-1, c+1);    //top right

        //left and right
        checkMine(r, c-1);      //left
        checkMine(r, c+1);      //right

        //bottom 3
        checkMine(r+1, c-1);    //bottom left
        checkMine(r+1, c);      //bottom
        checkMine(r+1, c+1);    //bottom right
    }

    if (tilesClicked == rows * columns - minesCount) {
        document.getElementById("mines-count").innerText = "Cleared";
        gameOver = true;
        winSound.play(); // Play win sound when game is cleared
        stopTimer();
    }
}

function checkTile(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return 0;
    }
    if (minesLocation.includes(r.toString() + "-" + c.toString())) {
        return 1;
    }
    return 0;
}

function startTimer() {
    time = 0;
    timer = setInterval(() => {
        time++;
        document.getElementById("timer").innerText = "Timer: " + time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateFlagCount() {
    flagCount = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c].innerText == "🚩") {
                flagCount++;
            }
        }
    }
    document.getElementById("flag-count").innerText = "Flags: " + flagCount;
}
