const stack = document.querySelector(".stack");


const cards = Array.from(stack.children)
.reverse()
.filter((child) => child.classList.contains("cards"));


cards.forEach((card) => stack.appendchild(card));


function moveCard() {
    const lastCard = stack.lastElementChild;
    if (lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
            lastCard.classList.remove("swap");
            stack.insertBefore(lastCard, stack.firstElementChild);

        }, 1200);
    }
}



stack.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card && card === stack.lastElementChild) {
        card.classList.add("swap");

        setTimeout(() => {
            card.classList.remove("swap");
            stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
    }
});