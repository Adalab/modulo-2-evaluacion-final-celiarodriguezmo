"use strict";

//Punto 5. Borrar favoritos

//esta función añade el boton X en la lista de los cocktails favoritos
function paintButtonXFavorites(idDrink) {
  let paint = "";
  paint += `<div class="js-xButton hidden " data-id="${idDrink}">`;
  paint += `x`;
  paint += `</div>`;
  favList.innerHTML += paint;

  let favElement = document.getElementsByClassName("js-xButton");

  for (const fav of favElement) {
    fav.addEventListener("click", removeFavouriteCocktail);
  }
}
// esta función me elimina el coctel del listado de favoritos cuando pincha la X
function removeFavouriteCocktail(event) {
  const idFavCocktail = event.currentTarget.dataset.id;
  console.log(idFavCocktail);
}
