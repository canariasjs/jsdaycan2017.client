import gql from 'graphql-tag'

export const addMovie = gql`
  mutation addMovie(
    $title: String!, 
    $description: String, 
    $poster_image: String, 
    $rating: Float,
    $year: String,
 ) {
    addMovie(
      title: $title,
      description: $description,
      poster_image: $poster_image,
      rating: $rating,
      year: $year,
    ) {
      id,
      title,
    }
  }
`

export const updateMovie = gql`
  mutation updateMovie(
    $id: Int!,
    $title: String!, 
    $description: String, 
    $poster_image: String, 
    $rating: Float,
    $year: String,
  ) {
    updateMovie(
    ) {
      id,
      title,
    }
  }
`
/*
export const updateMovie = gql`
  mutation updateMovie(
    $id: Int!,
    $title: String!, 
    $description: String, 
    $poster_image: String, 
    $rating: Float,
    $year: String,
  ) {
    updateMovie(
      id: $id,
      title: $title,
      description: $description,
      poster_image: $poster_image,
      rating: $rating,
      year: $year,
    ) {
      id,
      title,
    }
  }
`
*/