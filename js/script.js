{

  const onHideShowPhotoClick = () => {
    aboutMe__pictureOfMe.classList.toggle("aboutMe__pictureOfMe--hidden");
    aboutMe__button.innerHTML =
      aboutMe__button.innerHTML === "Schowaj mnie" ? "Przywróć" : "Schowaj mnie";
  }
  const aboutMe__button = document.querySelector(".aboutMe__button");
  const aboutMe__pictureOfMe = document.querySelector(".aboutMe__pictureOfMe");
  aboutMe__button.addEventListener("click", onHideShowPhotoClick);

}

{
  const onChangePhotoClick = () => {
    idyllPhoto.classList.toggle("myPhotos--hide");
    weatherWindowPhoto.classList.toggle("myPhotos--hide");
  }
  const idyllPhoto = document.querySelector(".weatherWindowPhoto");
  const weatherWindowPhoto = document.querySelector(".idyllPhoto");
  const myPhotos__changeButton = document.querySelector(".myPhotos__changeButton");

  myPhotos__changeButton.addEventListener("click", onChangePhotoClick);

}

const init = () => {
  console.log("HELLO WORLD");
}
init();