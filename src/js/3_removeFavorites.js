"use strict";

//Punto 5. Borrar favoritos

//esta función añade el boton X en la lista de los cocktails favoritos
function paintButtonXFavorites() {
  let paint = "";

  paint += `<div class="js-xButton hidden">`;
  paint += `x`;
  paint += `</div>`;

  favList.innerHTML += paint;
}

let listFavs = document.getElementsByClassName("js-list-favs2");

let favElement = document.getElementsByClassName("js-fav-li");

for (favElement of listFavs) {
  favElement.addEventListener("click", removeFavouriteCocktail);
}

function removeFavouriteCocktail(event) {
  const idFavCocktail = event.currentTarget;
  console.log(event.currentTarget);
}

/*
function handleClickButton(event) {
  console.log(event.currentTarget);
  for (let i = 0; i < arrayFavoritos.length; i++) {
    let position = i;
    if (i === 1) {
      let whatButtonClick = arrayFavoritos.slice(1);
    }
  }
}

const allButton = document.getElementsByClassName("js-list-favs2");

for (const eachButton of allButton) {
  eachButton.addEventListener("click", handleClickButton);
}
*/
