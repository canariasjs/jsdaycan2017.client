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