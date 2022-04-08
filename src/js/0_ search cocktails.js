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

// aquí localizamos el id de los cocteles y lo comparamos con el id del cocktel que ha pinchado la usuaria.
//Añadimos la clase que distigue a los elementos eleccionados "favourite"

function addFavouriteCocktail(event) {
  let idCocktail = event.currentTarget.dataset.id;
  event.currentTarget.classList.add("favourite");
  const favoriteDrink = SearchResults.filter(
    (favoriteDrink) => idCocktail === favoriteDrink.idDrink
  )[0];
  arrayFavoritos.push(favoriteDrink);
  paintFavourites(favoriteDrink, favList);
}

// esta funcion pinta el listado de favoritos
function paintFavourites() {
  favList.innerHTML = "";
  for (const drink of arrayFavoritos) {
    paintCockteles(drink, favList);
  }
}

btnSearch.addEventListener("click", handleUserSearchForm);
