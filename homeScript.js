let gameCardHead;

class gameCard {
    constructor(element, next=null, prev=null) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}

window.onload = function getGameCards() {
    let gameCards = document.getElementsByClassName("gameCard");
    gameCardHead = createLinkedList(gameCards);
};

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
}

function cycleLeft() {
    gameCardHead = gameCardHead.prev;
}