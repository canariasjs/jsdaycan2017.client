import gql from 'graphql-tag'

export const allMovies = gql`
  query allMovies {
    allMovies {
      id
      title,
      description,
      poster_image,
      year,
      rating
    }
  }
`

/* Ejercicio: Indica a GraphQL que campos debe devolverte cuando pidas los detalles de una película */

export const movieById = gql`
  query moviesById($id: [Int]!) {
    moviesById(id: $id) {
    }
  }
`


/*
export const movieById = gql`
  query moviesById($id: [Int]!) {
    moviesById(id: $id) {
      id
      title,
      description,
      poster_image,
      year,
      rating
    }
  }
`
*/