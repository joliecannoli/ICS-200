let color = "black"
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Drawing enabled";
            }
            else {
                draw.innerHTML = "Drawing disabled"
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("What will be the board size?");
    let message = document.querytSelector("#message");
    if(input == "") {
        message.innerHTML = "Invalid input. Please provide a valid number"
    }
    else if(input < 0 || input > 100) {
        message.innerHTML = "Please provide a number between 1 and 100"
    } 
    else {
        message.innerHTML = "Now you play!"
        return input;
    }
}

function colorDiv() {
    if(click) {
        if(color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}