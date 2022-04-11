"use strict";
//punto 3.

/* crearemos una variable o constante de tipo array en JS para almacenar los cócteles favoritos.*/

function addFavouriteCocktail(event) {
  const idCocktail = event.currentTarget.dataset.id;
  const favoriteDrink = SearchResults.filter(
    (favoriteDrink) => idCocktail === favoriteDrink.idDrink
  )[0];

  checkFavCocktails(favoriteDrink, event);
  //event.currentTarget.classList.remove("favourite");
}

// esta funcion pinta el listado de favoritos y el botón X
function paintFavourites() {
  favList.innerHTML = "";

  for (const drink of arrayFavoritos) {
    paintCockteles(drink, favList);

    paintButtonXFavorites(drink.idDrink);
  }
}
//funcion que comprueba si el cocktel está ya en el array favoritos//

function checkFavCocktails(favoriteDrink, event) {
  // localizamos el id de los cocteles y lo comparamos con el id del cocktel que ha pinchado la usuaria.

  const isFav = arrayFavoritos.findIndex((fav) => {
    return fav.idDrink === favoriteDrink.idDrink;
  });
  //con findIndex si el resultado es -1 quiere decir que no ha encontrado este elemento en la lista del arrayFavoritos

  if (isFav === -1) {
    //Añadimos el elemento al arrayFavoritos , junto con la clase "favourite"

    arrayFavoritos.push(favoriteDrink);
    event.currentTarget.classList.add("favourite");
  } else {
    arrayFavoritos.splice(isFav, 1);
    event.currentTarget.classList.remove("favourite");
  }
  //llamamos a la funcion para que lo pinte.
  paintFavourites();
  //Guardamos en Local Storage la lista de Favoritos
  localStorage.setItem("arrayFavoritosStored", JSON.stringify(arrayFavoritos));

  //sacamos el valor de isFav para usarlo en otra parte del código
  return isFav;
}
