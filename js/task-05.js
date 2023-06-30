const userName = document.querySelector("#name-input");
const userName2 = document.querySelector("#name-output");

userName.addEventListener("input", onInput);

function onInput(evt) {
    userName2.textContent = evt.currentTarget.value;
}
