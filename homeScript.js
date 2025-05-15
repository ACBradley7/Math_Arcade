let gameCardHead;
let gameCards;

class gameCard {
    constructor(element, next=null, prev=null) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}

window.onload = function gameCardInitInfo() {
    // Replace with txt file eventually
    let gameCards = [
        {   name: "Placeholder",
            container: "offScreenGameCardHolder",
            new: false,
            url: null,
            img: null
        },
        {
            name: "Starfield",
            container: "gameCardHolderOne",
            new: false,
            url: null,
            img: null
        },
        {
            name: "RTS",
            container: "gameCardHolderTwo",
            new: false,
            url: null,
            img: null
        },
        {
            name: "Platformer",
            container: "gameCardHolderThree",
            new: false,
            url: null,
            img: null
        }
    ]
}

window.onload = function getGameCards() {
    let gameCards = document.getElementsByClassName("gameCard");
    gameCardHead = createLinkedList(gameCards);
};

function createGameCardHTML(cardInfo) {

}

function createLinkedList(arr) {
    let node;
    let prevNode;

    // Convert array into linked list
    for (let i = 0; i < arr.length; i++) {
        if (prevNode) {
            node = new gameCard(arr[i]);
            prevNode.next = node;
            node.prev = prevNode;
        } else {
            node = new gameCard(arr[i]);
            head = node
        }
        prevNode = node;
    }

    // Make Circular
    node.next = head;
    head.prev = node;

    return head;
}

function cycleCarousel() {

}

function cycleRight() {
    gameCardHead = gameCardHead.next;

    containerOne = document.getElementById("gameCardHolderOne");
    containerTwo = document.getElementById("gameCardHolderTwo");
    containerThree = document.getElementById("gameCardHolderThree");
    containerOffScreen = document.getElementById("offScreenGameCardHolder")

    nextGameCard = gameCardHead;
    gameCardOne = containerOne.firstElementChild;
    gameCardTwo = containerTwo.firstElementChild;
    gameCardThree = containerThree.firstElementChild;

    //gameCardOne.classList.add("gameCardMove");
    //gameCardOne.classList.remove("gameCardMove");
    //containerOne.appendChild(nextGameCard);

    containerTwo.appendChild(gameCardOne);
    containerThree.appendChild(gameCardTwo);
    containerOffScreen.appendChild(gameCardThree);
}

function cycleLeft() {
    gameCardHead = gameCardHead.prev;

    containerOne = document.getElementById("gameCardHolderOne");
    containerTwo = document.getElementById("gameCardHolderTwo");
    containerThree = document.getElementById("gameCardHolderThree");
    containerOffScreen = document.getElementById("offScreenGameCardHolder")

    nextGameCard = gameCardHead;
    gameCardOne = containerOne.firstElementChild;
    gameCardTwo = containerTwo.firstElementChild;
    gameCardThree = containerThree.firstElementChild;

    containerOffScreen.appendChild(gameCardOne);
    containerOne.appendChild(gameCardTwo);
    containerTwo.appendChild(gameCardThree);
}