"use strict";


function handleBtnReset(cocktailSelected, event) {
  
  deleteArrayFavoritos();

  paintFavourites();

  localStorage.setItem("arrayFavoritosStored", JSON.stringify(arrayFavoritos));

  location.reload(); 
}

btnReset.addEventListener("click", handleBtnReset);


//esta función vacia el array favoritos
function deleteArrayFavoritos() {
  arrayFavoritos.length = 0;
  console.log(arrayFavoritos);
}
