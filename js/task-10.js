function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = parseInt(inputAmount.value);
  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
}
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}