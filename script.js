const envelope = document.querySelector(".envelope");

const flap = document.querySelector(".flap");

const seal = document.querySelector(".seal");

const letter = document.querySelector(".letter");



envelope.addEventListener("click", () => {


flap.classList.toggle("open-flap");


letter.classList.toggle("show-letter");


seal.classList.toggle("hide");


});