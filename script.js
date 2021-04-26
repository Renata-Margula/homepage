console.log("HELLO WORLD");

let idyllPhoto = document.querySelector(".weatherWindowPhoto");
let weatherWindowPhoto = document.querySelector(".idyllPhoto");
let myPhotos__changeButton = document.querySelector(".myPhotos__changeButton");
let aboutMe__button = document.querySelector(".aboutMe__button");
let aboutMe__pictureOfMe = document.querySelector(".aboutMe__pictureOfMe");

myPhotos__changeButton.addEventListener("click", () => {
  idyllPhoto.classList.toggle("myPhotos__hide");
  weatherWindowPhoto.classList.toggle("myPhotos__hide");
});
aboutMe__button.addEventListener("click", () => {
  aboutMe__pictureOfMe.classList.toggle("aboutMe__pictureOfMe--hidden");
  aboutMe__button.innerHTML =
    aboutMe__button.innerHTML === "Schowaj mnie" ? "Przywróć" : "Schowaj mnie";
});
