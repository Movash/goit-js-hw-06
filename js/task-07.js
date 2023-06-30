const fontSizeControl = document.querySelector("#font-size-control");
const fontText = document.querySelector("#text");

fontSizeControl.addEventListener("input", onSlide);

function onSlide() {
    const fontSizeRange = fontSizeControl.value + "px";
    fontText.style.fontSize = fontSizeRange;
}