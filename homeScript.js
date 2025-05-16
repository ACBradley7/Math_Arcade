let gameCards;

// class gameCard {
//     constructor(element, next=null, prev=null) {
//         this.element = element;
//         this.next = next;
//         this.prev = prev;
//     }
// }

window.onload = function onPageLoad() {
    gameCardInitInfo();
    createGameCardsHTML();
}

function createGameCardsHTML() {
    for (let i = 0; i < gameCards.length; i++) {
        createGameCardHTML(gameCards[i]);
    }
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
        {   GameID: "Placeholder",
            containerID: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        },
        {
            GameID: "4",
            containerID: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        },
        {   GameID: "5",
            containerID: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        }
    ]
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
    gameCardPlayButton.classList.add("gameCardPlayButton");
    gameCardPlayButton.src = "Icons\\gameCardPlayButton.svg";

    gameCardPlayButtonDiv.appendChild(gameCardPlayButton);
    gameCardTitleHeader.appendChild(gameCardTitleText);
    gameCardTitleDiv.appendChild(gameCardTitleHeader);
    gameCardDiv.appendChild(gameCardTitleDiv);
    gameCardDiv.appendChild(gameCardPlayButtonDiv);
    gameCardContainerDiv.appendChild(gameCardDiv);
}

// function createLinkedList(arr) {
//     let node;
//     let prevNode;

//     // Convert array into linked list
//     for (let i = 0; i < arr.length; i++) {
//         if (prevNode) {
//             node = new gameCard(arr[i]);
//             prevNode.next = node;
//             node.prev = prevNode;
//         } else {
//             node = new gameCard(arr[i]);
//             head = node
//         }
//         prevNode = node;
//     }

//     // Make Circular
//     node.next = head;
//     head.prev = node;

//     return head;
// }

function cycleCarousel() {

}

function cycleRight() {
    containerOne = document.getElementById("gameCardHolderOne");
    containerTwo = document.getElementById("gameCardHolderTwo");
    containerThree = document.getElementById("gameCardHolderThree");
    containerOffScreen = document.getElementById("offScreenGameCardHolder");
    
    newGameCard = document.getElementById(gameCards[gameCards.length - 1].GameID);
    gameCardOne = document.getElementById(gameCards[0].GameID);
    gameCardTwo = document.getElementById(gameCards[1].GameID);
    gameCardThree = document.getElementById(gameCards[2].GameID);
        
    containerOne.appendChild(newGameCard);
    containerTwo.appendChild(gameCardOne);
    containerThree.appendChild(gameCardTwo);
    containerOffScreen.appendChild(gameCardThree);
    
    lastGameCard = gameCards.pop();
    gameCards.splice(0, 0, lastGameCard);
}

function cycleLeft() {
    containerOne = document.getElementById("gameCardHolderOne");
    containerTwo = document.getElementById("gameCardHolderTwo");
    containerThree = document.getElementById("gameCardHolderThree");
    containerOffScreen = document.getElementById("offScreenGameCardHolder");
    
    newGameCard = document.getElementById(gameCards[3].GameID);
    gameCardOne = document.getElementById(gameCards[0].GameID);
    gameCardTwo = document.getElementById(gameCards[1].GameID);
    gameCardThree = document.getElementById(gameCards[2].GameID);
    
    containerOffScreen.appendChild(gameCardOne);
    containerOne.appendChild(gameCardTwo);
    containerTwo.appendChild(gameCardThree);
    containerThree.appendChild(newGameCard);
    
    firstGameCard = gameCards.shift();
    gameCards.push(firstGameCard);
}