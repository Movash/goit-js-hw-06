const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", onSubmit);

function onSubmit(evt) {
evt.preventDefault();

const {email, password} = evt.currentTarget.elements;

if (email.value === "" || password.value === "") {
alert("Всі поля повинні бути заповнені!")
} else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.dir(data);
    formElem.reset();
}
}