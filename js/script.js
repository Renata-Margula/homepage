{

  const onHideShowPhotoClick = () => {
    article__image.classList.toggle("article__image--hidden");
    article__button.innerHTML =
      article__button.innerHTML === "Schowaj mnie" ? "Przywróć" : "Schowaj mnie";
  }
  const article__button = document.querySelector(".article__button");
  const article__image = document.querySelector(".article__image");
  article__button.addEventListener("click", onHideShowPhotoClick);

}

{
  const onChangePhotoClick = () => {
    img1.classList.toggle("section__image--hide");
    img2.classList.toggle("section__image--hide");
  }
  const section__button = document.querySelector(".section__button");
  const img1 = document.getElementById("idylla");
  const img2 = document.getElementById("okno-pogodowe");
  section__button.addEventListener("click", onChangePhotoClick);

}

const init = () => {
  console.log("HELLO WORLD");
}
init();