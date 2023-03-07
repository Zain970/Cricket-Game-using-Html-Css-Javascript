
const createImage = (parent, imagePath, class_Name) => {

    const element = document.createElement("img");

    // ASSIGNING THE CLASS NAME
    element.classList.add(class_Name);

    // ASSIGNING THE SOURCE IMAGE PATH
    element.setAttribute("src", imagePath)

    parent.appendChild(element);

    return element;

}

function player_information(parentElement, tagName, html, className) {
    const element = document.createElement(tagName);

    // INSERTING THR INNER TEXT
    element.innerHTML = html;

    parentElement.appendChild(element);

    return element;
}

const game = document.querySelector(".game")
const Background = createImage(game, "Background-Even.jpg", "background-image");
const ball_1 = createImage(game, "Ball.png", "ball-1")
const ball_2 = createImage(game, "Ball.png", "ball-2")
const batsem = createImage(game, "Player1.png", "player")


// DISPLAYING THE DETAILS OF THE USER
const info = document.querySelector(".info")
const Name = player_information(info, "h1", "Name : Zain Ul Abidin")
const Roll_No = player_information(info, "h1", "Roll-No : 19I-0538")
const Score = player_information(info, "h1", "Score : <span id=`score`>10</span>")


const help = document.querySelector(".help");
const instructions = player_information(help, "h2", "Press T to take a shot");


let ball1 = 450;
let ball2 = 450;


const displayResult = document.querySelector(".result h2")
const scoreSpan = document.querySelector("span");

document.addEventListener("keypress", (e) => {


    const pressedKey = e.code;

    if (pressedKey.includes("T")) {


        if (col(batsem, ball_1) || col(batsem, ball_2)) {

            displayResult.innerHTML = "Good Shot"

            let currentScore = Number(scoreSpan.innerText)
            currentScore = currentScore + 8;
            scoreSpan.innerText = currentScore;

        }
        else {
            displayResult.innerHTML = "Miss"

            let currentScore = Number(scoreSpan.innerText)
            currentScore = currentScore - 8;
            scoreSpan.innerText = currentScore;
        }

    }

});


function movement() {
    console.log("Mover")

    // BALL-1 MOVEMENT
    if (ball1 <= 1400) {

        ball_1.style.right = `${ball1}px`
        ball1 = ball1 + 5
    }
    // BALL-2 MOVEMENT
    else {
        if (ball2 <= 1400) {

            // BALL-1 AT THE ORIGINAL POSITION

            ball_1.style.right = "450px"

            ball_2.style.right = `${ball2}px`
            ball2 = ball2 + 10;
        }
        else {
            ball1 = 450;

            ball2 = 450;
            ball_2.style.right = `${ball2}px`
        }
    }

    game.move = window.requestAnimationFrame(movement);
}


function col(el1, el2) {
    const a = el1.getBoundingClientRect();
    const b = el2.getBoundingClientRect();

    return (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x) && (a.y <
        (b.y + b.height)) && ((a.y + a.height) > b.y);
}


movement();

