const text = document.querySelector("#validation-input");

text.addEventListener("change", onInput);

function onInput(evt) {
  if (evt.currentTarget.value.length === Number(text.dataset.length)) {
    text.classList.remove("invalid");
    text.classList.add("valid");
  } else {
    text.classList.remove("valid");
    text.classList.add("invalid");
  }
}

