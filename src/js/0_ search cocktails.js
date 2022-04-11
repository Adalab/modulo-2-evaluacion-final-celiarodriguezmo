"use strict";

const inputSearch = document.querySelector(".js-input-search");
const btnSearch = document.querySelector(".js-btn-search");
let resultList = document.querySelector(".js-list");
const urlApiCocktails =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let SearchResults = [];
let textSearchByUser = "";
let favList = document.querySelector(".js-list-favs");
let arrayFavoritos = [];

//punto 2. Búsqueda

//con esta función recogemos el valor de lo que escribe la usuaria.

function handleUserSearchForm() {
  textSearchByUser = inputSearch.value;
  fetch(`${urlApiCocktails}${textSearchByUser}`)
    .then((response) => response.json())
    .then((serverInfo) => {
      resultList.innerHTML = "";
      SearchResults = serverInfo.drinks;
      paintResults();

      /* Escuchamos de todos los elementos de la lista que tienen la clase Js-li para ver en cual pincha. */

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

function paintCockteles(drink, list) {
  let paint = "";
  const isFav = arrayFavoritos.findIndex((fav) => {
    return fav.idDrink === drink.idDrink;
  });

  paint += `<li class="js-li js-fav-li" id="${drink.idDrink}" data-id="${drink.idDrink}">`;
  paint += `<article>`;
  paint += `<h3>${drink.strDrink}</h3>`;
  paint += `<img src="${drink.strDrinkThumb}"
  alt="Imagen del cocktail buscado" class="img"/>`;
  paint += `</article>`;
  paint += `</li>`;

  list.innerHTML += paint;
}

btnSearch.addEventListener("click", handleUserSearchForm);
