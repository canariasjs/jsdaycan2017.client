## JSDAYCAN2017.MOVIES-CLIENT

Este repositorio contiene el codigo paso a paso desarrollado durante el workshop del JSDAYCAN2017.

## Requerimientos

* Instalar NodeJS ( Recomendado con NVM)

* Instalar Git

* Instalar un editor de texto (VSCode, Atom, Sublime Text ...). Recomendado VSCode.

## Workshop

A lo largo del workshop iremos viendo el proyecto paso a paso. Para ello cada paso ha sido etiquetado para que puedas moverte entre ellos.

## Proyecto

Este proyecto es un cliente desarrollado con ReactJS y Apollo Client, el cual consulta a una API GraphQL para realizar
operaciones CRUD (Create Read Update Delete) sobre películas.

Este proyecto se basa en create-react-app con las siguientes modificaciones:

Para la implementación de estilos hemos añadido React-Bootstrap y e integrado sass como preprocesador CSS.

Para consultar la API Graph hemos añadido apollo-client

Hemos añadido stylelint y el stylelint.rc para lintear el codigo sass.

# Paso 1

En este paso hemos creado dos tipos de componente:
- Movies: un componente container
- MovieItem: un componente presentacional

Dado que los componentes presentacionales no necesitan tener estado propio,
ya que utilizan los datos que reciben de su container padre y a su vez, ejecutan
funciones de su container padre, se plantea el siguiente ejercicio:

- Refactorizar el componente MovieItem al formato funcional, de forma que será una
  arrow function que recibe props por parámetros y retorna el JSX.

# Paso 2

En este paso crearemos un json con películas mockeadas desde la API GraphQL que serán cargadas desde el container Movies.
Por cada película, mostraremos un componente MovieItem con los datos correspondientes.

Dado que nuestro componente MovieItem solo muestra el título, se plantea el siguiente ejercicio:

- Refactorizar el componente MovieItem para que muestre, además del título, la imagen y el rating.

# Paso 3

En este paso añadiremos un router a nuestra aplicación. Para ello crearemos un nuevo container que se encargará 
de mostrar los detalles de una película y el cual recibirá la pelicula en sus props desde el router.

Una vez que tenemos los datos en las props del componente, se plantean los siguientes ejercicios:

- Asociar la pelicula que recibimos por parámetro al state del coponente
- Mostrar en el componente el titulo (h4) y la descripción de la película (<p>)

# Paso 4

En este paso añadiremos un boton en el movies container que nos permite mostrar un modal con un formulario para crear películas.
En movies container controlaremos si el formulario está abierto o cerrado.

El formulario tendrá su propio estado, el cual será las propiedades de una película. Además añadiremos validadores que nos permitan
controlar los datos que el usuario está introduciendo.

Una vez que tenemos el formulario creado y podemos llamarlo desde el movies container, se plantean los siguientes ejercicios:

- Añadir una propiedad rating al formulario para permitir que el usuario valore la película.
- Añadir un validador al formulario que controle que el rating esté entre 0 y 10

# Paso 5

En este paso crearemos los botones Edit y Delete en el container movieDetails.
En este container, al igual que en el caso anterior, llamaremos al container movieForm pero esta vez le pasaremos una película por parámetro.
Hemos modificado el componente movieForm para que si recibe una película por parametro, rellene el formulario con los datos de esa película.

Una vez tenemos cargado el movieForm desde movieDetails, y se ha modificado el form para recibir la película. Se plantéa el siguiente ejercicio:

- Envíale por parámetro al MovieForm la película que estas viendo en detalles. El formulario se sobreescribirá con la pelicula que reciba por parámetro en componentWillReceiveProps()

# Paso 6

En este paso, modificando el archivo index.js hemos conectado nuestra aplicación con el GraphQL server que tenemos funcionando localmente.

Posteriormente, hemos creado un archivo donde almacenamos todas las queries que vamos a realizar al GraphQL server.

Luego hemos definido nuestra primera query, llamada allMovies. Esta querie obtendrá un array de películas del server y dichas películas
tendrán las propiedades que nosotros hemos especificado en la query.

Por último, hemos conectado nuestro container component a GraphQL para mostrar los datos recibidos de la API en vez de los datos mockeados.

# Paso 7


En este paso hemos conectado nuestro container component moviesDetails a GraphQL para obtener los datos de una pelicula especifica desde la API.
Para ello, le pasamos a Apollo el id de la pelicula que queremos obtener.

Dado que en el paso 6 ya viste como se creaba una query, se plantea el siguiente ejercicio:

- Actualiza la query moviesById indicándole que parametros debe de tener la película que devuelve la API.

# Paso 8

En este paso hemos conectado nuestro movieForm container component a GraphQL de forma que cuando pulsemos el boton crear de nuestro formulario,
ejecutará una mutation.

La mutation la hemos definido en mutations/movies.js de forma que está lista para recibir los datos que necesitamos y ejecutar la peticion.

Por ultimo, a la hora de exportar el container movieForm hemos definido que tras ejecutar la mutation, ejecutaremos de nuevo la query allMovies para refrescar
automaticamente nuestra lista de películas.
