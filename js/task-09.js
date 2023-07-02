function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");

buttonElem.addEventListener("click", onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanElem.textContent = randomColor;
}