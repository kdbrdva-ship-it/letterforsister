const envelope = document.querySelector(".envelope");

const seal = document.querySelector(".seal");

const flap = document.querySelector(".flap");

const letter = document.querySelector(".letter");


envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    seal.classList.toggle("hide");

    flap.classList.toggle("open-flap");

    letter.classList.toggle("show-letter");

});