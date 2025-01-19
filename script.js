const container = document.querySelector("[data-container]");
const actionBtn = document.querySelector("[data-action-btn]");
const headText = document.querySelector("[data-game-info]");

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

actionBtn.addEventListener("click", () => {
    render();
})

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin", `
        <svg class="dice dice-red">
            <use href="sprites.svg#dice-${player1}-icon"></use>
        </svg>
        <svg class="dice dice-blue">
            <use href="sprites.svg#dice-${player2}-icon"></use>
        </svg>
        `)
    if (player1 === player2) {
        headText.textContent = "НИЧЬЯ!";
        headText.style.color = "#000";
    }
    else if (player1 > player2) {
        headText.textContent = "Победил игрок 1";
        headText.style.color = "#E98B8B";
    }
    else {
        headText.textContent = "Победил игрок 2";
        headText.style.color = "#449fcc";
    }
}

render();
