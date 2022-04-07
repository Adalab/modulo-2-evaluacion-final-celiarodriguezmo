'use strict';

const inputSearch = document.querySelector('.js-input-search');
const btnSearch = document.querySelector('.js-btn-search');
const urlApiCocktails= "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
//al iniciar la página ya debo tener acceso al servidor con los datos de los cocteles

let infoCocktailsServer = [];

fetch (urlApiCocktails)
.then(response => response.json())
.then(serverInfo =>{
    infoCocktailsServer = serverInfo.drinks;
    console.log(infoCocktailsServer);
})



//Tengo que hacer un evento para escuchar cuando la usuaria teclea en el input de texto y recoger el valor de lo que escribe

function handleUserCocktailSearchForm(event) {

let textSearchByUser = event.target.value;
console.log(event.target.value);
}


inputSearch.addEventListener('keyup', handleUserCocktailSearchForm);


// tengo que escuchar el evento en el botón buscar del formulario, luego comparar el valor de lo que ha escrito la usuaria con la base de datos.

function handleUserSearchForm() {
    console.log('Hey quieres buscar algún cóctel¿?!');
    paintListOfCocktails();
}


btnSearch.addEventListener('click', handleUserSearchForm);

//Luego tengo que pintar la lista de los Cócteles que coincidan

const paintList = document.querySelector('.js-list')

function paintListOfCocktails() {
    
    paintList.innerHTML += `<li>
    <article>
      <h2>${drinks.strDrink}</h2>
      <img
        src="./assets/images/margarita.jpg"
        alt="cocktail Margarita por defecto"
      />
    </article>
  </li>`;


}



