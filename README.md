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
- Mostrar en el componente el titulo (h4) y la descripción de la película (p)
