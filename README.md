Bucador de Cockteles 🍾🍷

Es una aplicación web que contiene un listado de las bebidas y cócteles más fantásticas del
mundo.✨

Además de ver sus increibles imágenes y títulos, podrás guardar las bebidas como favoritas y almacenarlas en local storage.💘

Si te has cansado de que los mojitos sean tu bebida favorita, puedes darle a la "X" en el listado favoritos para que salga de tu lista.

-----------------------------------------

Módulo 2: Ejercicio de evaluación final

Antes de empezar, hay que crear un nuevo repositorio desde GitHub Classroom usando este enlace.
Una vez creado, hay que clonar en nuestro ordenador y en la carpeta creada empezaremos a trabajar
en el ejercicio.
A continuación, si quieres, hay que descargar e incluir en el proyecto el starter kit de Adalab.

Enunciado

El ejercicio consiste en desarrollar una aplicación web que contiene un listado de las bebidas y cócteles de
todo el mundo, que nos permite des/marcar las bebidas como favoritas y guardarlas en local storage.
El ejercicio también tiene una parte de maquetación con HTML y Sass, os recomendamos dedicar esfuerzo
a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están
relacionados con esta última.

Vamos de definir los distintos hitos del ejercicio:

1. Estructura básica

En primer lugar hay que realizar una estructura básica sobre este modelo. No hay que preocuparse por las
medidas, colores ni tipografía hasta un hito posterior.

La aplicación de búsqueda de cócteles consta de dos partes:
 Un campo de texto y un botón para buscar un cóctel por su título.
 Un listado de resultados de búsqueda donde aparece la imagen del cóctel y el nombre.

2. Búsqueda

Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de
TheCocktailDB. Os recomendamos echar un vistazo al JSON que devuelve una petición de búsqueda
para ver qué datos son los que necesitamos:
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
Para construir la URL de búsqueda hay que recoger el texto que ha introducido la usuaria en el
campo de búsqueda.
Por cada cóctel contenido en el resultado de la búsqueda hay que pintar una tarjeta donde
mostramos una imagen del cóctel y el nombre.
Algunas de los cócteles que devuelve el API no tienen imagen. En ese caso hay que mostrar una
imagen de relleno. Podemos crear una imagen de relleno con el servicio de placeholder.com donde
en la propia URL indicamos el tamaño, colores, texto:
https://via.placeholder.com/210x295/ffffff/666666/?text=TV
Para pintar la información en la página se puede elegir entre hacerlo de forma básica con innerHTML
o manipulando de forma avanzada el DOM.
Notas:
Usad la dirección del enlace anterior, pero sin https: ni http:
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
Usad ev.preventDefault() para evitar que se recargue la página involuntariamente.

3. Favoritos

Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son nuestros cócteles
favoritos. Para ello, al hacer clic sobre una cóctel debe pasar lo siguiente:
El color de fondo y el de fuente se intercambian, indicando que es un cóctel favorito.
Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
con los cócteles favoritos. Os recomendamos crear un variable o constante de tipo array en JS para
almacenar los cócteles favoritos.
Los cócteles favoritos deben seguir apareciendo a la izquierda aunque la usuaria realice otra
búsqueda.

4. Almacenamiento local

Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado
de favoritos se debe mostrarse.

5. BONUS: Borrar favoritos

Como bonus, os proponemos la opción de borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de
cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.
Para terminar de rematar nuestra app de cócteles, nos gustaría poder añadir/quitar como favorito al hacer
clic sobre un cóctel del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale un cóctel que ya
es favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto
intercambiados).
Y ya sería fantástico si al final de la lista de favoritos hay un botón para borrarlos todos los favoritos a la vez.

6. BONUS: Afinar la maquetación

Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde tenéis
libertad para decidir los estilo. En cualquier caso os dejamos una propuesta gráfica.

Al turrón!!
