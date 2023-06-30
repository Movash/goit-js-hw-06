const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

console.dir(buttonDec);

buttonDec.addEventListener("click", onClickDec);
buttonInc.addEventListener("click", onClickInc);

let counterValue = 0;

function onClickInc() {
counterValue += 1;
value.textContent = `${counterValue}`;
}

function onClickDec() {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
}