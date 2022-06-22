"use strict";

//Punto 5. Borrar favoritos

//esta función añade el boton X en la lista de los cocktails favoritos
function paintButtonXFavorites(idDrink) {
  let paint = "";

  paint += `<em><i class="js-xButton hidden fa-solid fa-trash-can" data-id="${idDrink}"></em>`;

  favList.innerHTML += paint;

  let favElement = document.getElementsByClassName("js-xButton");

  for (const fav of favElement) {
    fav.addEventListener("click", removeFavouriteCocktail);
  }
}

// Esta función me elimina el coctel del listado de favoritos cuando pincha la X
function removeFavouriteCocktail(event) {
  //primero buscamos el id del coctel escuchando la X
  const idFavCocktail = event.currentTarget.dataset.id;
  const cocktailSelected = arrayFavoritos.filter(
    (cocktailSelected) => idFavCocktail === cocktailSelected.idDrink
  )[0];

  removePosition(cocktailSelected);
}

function removePosition(cocktailSelected) {
  //averiguamos cual es la posición del cocktail con ese id dentro del array favoritos.
  let cocktailPosition = arrayFavoritos.findIndex((position) => {
    return position.idDrink === cocktailSelected.idDrink;
  });
  //con el metodo Splice eliminamos el elemento que está en esa posición.
  arrayFavoritos.splice(cocktailPosition, 1);
  paintFavourites();
  //aprovechamos para quitarle la clase "favorite" al elemento marcado en la lista de los resultados.
  const idListDelete = document.getElementById(cocktailSelected.idDrink);
  idListDelete.classList.remove("favourite");
  //quitamos el elemento que ya no es favorito del local storage.
  localStorage.setItem("arrayFavoritosStored", JSON.stringify(arrayFavoritos));
}
