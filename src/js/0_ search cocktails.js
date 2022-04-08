"use strict";

const inputSearch = document.querySelector(".js-input-search");
const btnSearch = document.querySelector(".js-btn-search");
const paintList = document.querySelector(".js-list");
const urlApiCocktails =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let infoCocktailsServer = [];
let liContent = [];
let textSearchByUser = "";

function handleUserSearchForm() {
  textSearchByUser = inputSearch.value;
  fetch(`${urlApiCocktails}${textSearchByUser}`)
    .then((response) => response.json())
    .then((serverInfo) => {
      infoCocktailsServer = serverInfo.drinks;
      paintList.innerHTML = "";
      for (const infoOneCocktail of infoCocktailsServer) {
        let liContent = infoOneCocktail;
        paintCockteles(liContent);
      }
    });
}

//esta función pinta cada elemento de la lista de Cockteles

function paintCockteles(liContent) {
  paintList.innerHTML += `<li>
        <article>
         <h2>${liContent.strDrink}</h2>
        <img
            src="${liContent.strDrinkThumb}"
            alt="cocktail Margarita por defecto"
         />
       </article>
      </li>`;
}

btnSearch.addEventListener("click", handleUserSearchForm);
