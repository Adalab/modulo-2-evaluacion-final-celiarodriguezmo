"use strict";

const inputSearch = document.querySelector(".js-input-search");
const btnSearch = document.querySelector(".js-btn-search");
let resultList = document.querySelector(".js-list");
const urlApiCocktails =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let SearchResults = [];
let textSearchByUser = "";
let favList = document.querySelector(".js-list-favs");

//con esta función recogemos el valor de lo que escribe la usuaria, lo comparamos con la infor del servidor y mostramos los elementos que coinciden con su busqueda.

function handleUserSearchForm() {
  textSearchByUser = inputSearch.value;
  fetch(`${urlApiCocktails}${textSearchByUser}`)
    .then((response) => response.json())
    .then((serverInfo) => {
      resultList.innerHTML = "";
      SearchResults = serverInfo.drinks;
      paintResults();

      /* queremos que la usuaria pueda seleccionar de los cocteles buscados los favoritos al hacer clic sobre una cóctel, por eso escuchamos de todos los elementos de la lista que tienen la clase Js-li para ver en cual pincha. */

      const listElement = document.getElementsByClassName("js-li");
      for (const element of listElement) {
        element.addEventListener("click", addFavouriteCocktail);
      }
    });
}

//esta función pinta el resultado de los cóckteles buscados

function paintResults() {
  for (const drink of SearchResults) {
    paintCockteles(drink, resultList);
  }
}

//esta función detalla que propiedades necesito traer del array que me da el servidor

function paintCockteles(drink, list) {
  let paint = "";

  paint += `<li class="js-li" data-id="${drink.idDrink}">`;
  paint += `<article>`;
  paint += `<h3>${drink.strDrink}</h3>`;
  paint += `<img src="${drink.strDrinkThumb}"
  alt="Imagen del cocktail buscado" class="img"/>`;
  paint += `</article>`;
  paint += `</li>`;

  list.innerHTML += paint;
}

/* crearemos una variable o constante de tipo array en JS para almacenar los cócteles favoritos.*/

let arrayFavoritos = [];

function addFavouriteCocktail(event) {
  const idCocktail = event.currentTarget.dataset.id;
  const favoriteDrink = SearchResults.filter(
    (favoriteDrink) => idCocktail === favoriteDrink.idDrink
  )[0];

  checkFavCocktails(favoriteDrink);
}

// esta funcion pinta el listado de favoritos
function paintFavourites() {
  favList.innerHTML = "";
  for (const drink of arrayFavoritos) {
    paintCockteles(drink, favList);
  }
}

//funcion que comprueba si el cocktel está ya en el array favoritos//

function checkFavCocktails(favoriteDrink) {
  // localizamos el id de los cocteles y lo comparamos con el id del cocktel que ha pinchado la usuaria.

  const isFav = arrayFavoritos.findIndex((fav) => {
    return fav.idDrink === favoriteDrink.idDrink;
  });
  //con findIndex si el resultado es -1 quiere decir que no ha encontrado este elemento en la lista del arrayFavoritos

  if (isFav === -1) {
    //Añadimos el elemento al arrayFavoritos, junto con la clase que distigue a los elementos eleccionados "favourite"
    arrayFavoritos.push(favoriteDrink);

    //Guardamos en Local Storage la lista de Favoritos

    localStorage.setItem(
      "arrayFavoritosStored",
      JSON.stringify(arrayFavoritos)
    );
    event.currentTarget.classList.add("favourite");
    //llamamos a la funcion para que lo pinte.
    paintFavourites();
  } else {
    console.log("Ey! ya estabas en favorito");
  }
}

btnSearch.addEventListener("click", handleUserSearchForm);

const saveFavorites = JSON.parse(localStorage.getItem("arrayFavoritosStored"));
if (saveFavorites !== null) {
  arrayFavoritos = saveFavorites;
  paintFavourites();
} else {
  console.log("no hay nada en local");
  handleUserSearchForm(event);
}
