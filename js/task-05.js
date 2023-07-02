const userName = document.querySelector("#name-input");
const userName2 = document.querySelector("#name-output");

userName.addEventListener("input", onInput);

function onInput(evt) {
    if (evt.currentTarget.value === "") {
        userName2.textContent = "Anonymous";
    } else {
        userName2.textContent = evt.currentTarget.value;
    }
}
