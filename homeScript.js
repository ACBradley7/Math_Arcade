let gameCards;
let carouselCycling = false;

window.onload = function onPageLoad() {
    gameCardInitInfo();
    createGameCardsHTML();
}

function gameCardInitInfo() {
    // Replace with txt file eventually
    gameCards = [
        {
            GameID: "Starfield",
            containerID: "gameCardHolderOne",
            new: false,
            url: null,
            img: null
        },
        {
            GameID: "RTS",
            containerID: "gameCardHolderTwo",
            new: false,
            url: null,
            img: null
        },
        {
            GameID: "Platformer",
            containerID: "gameCardHolderThree",
            new: false,
            url: null,
            img: null
        },
        {   GameID: "Duel",
            containerID: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        },
        {
            GameID: "Placeholder1",
            containerID: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        },
        {   GameID: "Placeholder2",
            containerID: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        }
    ]
}

function createGameCardsHTML() {
    for (let i = 0; i < gameCards.length; i++) {
        createGameCardHTML(gameCards[i]);
    }
}

function createGameCardHTML(cardInfo) {
    gameCardContainerDiv = document.getElementById(`${cardInfo.containerID}`);
    gameCardDiv = document.createElement("div");
    gameCardTitleDiv = document.createElement("div");
    gameCardTitleHeader = document.createElement("h1");
    gameCardTitleText = document.createTextNode(`${cardInfo.GameID}`);
    gameCardPlayButtonDiv = document.createElement("div");
    gameCardPlayButton = document.createElement("img");

    gameCardDiv.classList.add("gameCard", "centered", "flexContainer");
    gameCardDiv.id = `${cardInfo.GameID}`;
    gameCardTitleDiv.classList.add("gameCardTitle");
    gameCardPlayButtonDiv.classList.add("gameCardPlayButtonDiv");
    gameCardPlayButton.classList.add("playButton");
    gameCardPlayButton.src = "Icons\\gameCardPlayButton.svg";

    gameCardPlayButtonDiv.appendChild(gameCardPlayButton);
    gameCardTitleHeader.appendChild(gameCardTitleText);
    gameCardTitleDiv.appendChild(gameCardTitleHeader);
    gameCardDiv.appendChild(gameCardTitleDiv);
    gameCardDiv.appendChild(gameCardPlayButtonDiv);
    gameCardContainerDiv.appendChild(gameCardDiv);
}

// function cycleCarousel(event) {

// }

function cycleLeft() {
    if (carouselCycling) return;
    carouselCycling = true;

    carousel = document.getElementById("gameCardContainersWrapper");

    containerOne = document.getElementById("gameCardHolderOne");
    containerTwo = document.getElementById("gameCardHolderTwo");
    containerThree = document.getElementById("gameCardHolderThree");
    containerOffScreen = document.getElementById("offScreenGameCardHolder");
    
    newGameCard = document.getElementById(gameCards[gameCards.length - 1].GameID);
    gameCardOne = document.getElementById(gameCards[0].GameID);
    gameCardTwo = document.getElementById(gameCards[1].GameID);
    gameCardThree = document.getElementById(gameCards[2].GameID);

    carousel.classList.toggle("gameCardFadeOut");

    setTimeout(() => {
        carousel.classList.toggle("gameCardFadeOut");
        carousel.classList.toggle("gameCardFadeIn");

        // move DOM elements here
        containerOffScreen.appendChild(gameCardThree);
        containerThree.appendChild(gameCardTwo);
        containerTwo.appendChild(gameCardOne);
        containerOne.appendChild(newGameCard);
    }, 300);
    
    setTimeout(() => {
        carousel.classList.toggle("gameCardFadeIn");
        carouselCycling = false;
    }, 600);

    lastGameCard = gameCards.pop();
    gameCards.splice(0, 0, lastGameCard);
}


function cycleRight() {
    if (carouselCycling) return;
    carouselCycling = true;

    carousel = document.getElementById("gameCardContainersWrapper");

    containerOne = document.getElementById("gameCardHolderOne");
    containerTwo = document.getElementById("gameCardHolderTwo");
    containerThree = document.getElementById("gameCardHolderThree");
    containerOffScreen = document.getElementById("offScreenGameCardHolder");
    
    newGameCard = document.getElementById(gameCards[3].GameID);
    gameCardOne = document.getElementById(gameCards[0].GameID);
    gameCardTwo = document.getElementById(gameCards[1].GameID);
    gameCardThree = document.getElementById(gameCards[2].GameID);

    carousel.classList.toggle("gameCardFadeOut");

    setTimeout(() => {
        carousel.classList.toggle("gameCardFadeOut");
        carousel.classList.toggle("gameCardFadeIn");

        // move DOM elements here
        containerOffScreen.appendChild(gameCardOne);
        containerOne.appendChild(gameCardTwo);
        containerTwo.appendChild(gameCardThree);
        containerThree.appendChild(newGameCard);
    }, 300);
    
    setTimeout(() => {
        carousel.classList.toggle("gameCardFadeIn");
        carouselCycling = false;
    }, 600);    

    firstGameCard = gameCards.shift();
    gameCards.push(firstGameCard);
}