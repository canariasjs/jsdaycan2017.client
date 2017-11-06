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