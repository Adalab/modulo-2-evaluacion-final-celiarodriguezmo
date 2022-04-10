"use strict";

//punto 4. Almacenar la lista de favoritos en local storage

const saveFavorites = JSON.parse(localStorage.getItem("arrayFavoritosStored"));

if (saveFavorites !== null) {
  // si el local storage esta lleno con los datos ya guardados los pinta
  arrayFavoritos = saveFavorites;
  paintFavourites();
} else {
  // si el local storage esta vacio llamo a la función handleUserSearchForm para que inicie la busqueda de cocteles.
  console.log("no hay nada en local");
  handleUserSearchForm(event);
}
