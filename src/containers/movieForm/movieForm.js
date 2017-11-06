import React, { Component } from 'react';
import './movieForm.css';
import { Button, Modal, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

/* 

  FILM EXAMPLE:

  Interestellar

  Interstellar es una película épica de ciencia ficción estadounidense de 2014, 
  dirigida por Christopher Nolan y protagonizada por Matthew McConaughey, Anne Hathaway, 
  Jessica Chastain, Michael Caine y Matt Damon.

  2014

  https://jaumecentelles.files.wordpress.com/2016/05/1-cartel-de-interstellar.jpg?w=210&h=300
  https://www.youtube.com/embed/zSWdZVtXT7E?rel=0&amp;showinfo=0 

  9
*/

/*
  Ejercicio 1: Añade una propiedad rating al formulario para permitir que el usuario valore la película.
  Ejercicio 2: Añade un validador al formulario que controle que el rating esté entre 0 y 10

*/


class MovieForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      form: {
        id: '',
        title: '',
        description: '',
        poster_image: '',
        year: '',
        rating: '',
        directors: [ ],
        trailer: {
          width: 560,
          height: 315,
          frameborder: 0,
          iframe: '',
          src: '',
        },
        actors: [ ]
      },
      filteredActors: []
    }
  }

  // ## Form controllers: Controlan el estado del formulario y muestran mensajes 
  // ## si los datos introducidos no son válidos

  getValidationTitleState = () => {
    const length = this.state.form.title.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    else return 'warning';
  };

  getValidationDescriptionState = () => {
    const length = this.state.form.description.length;
    if (length > 80) return 'success';
    else if (length > 50) return 'warning';
    else if (length > 0) return 'error';
    else return 'warning';
  };

  getValidationYearState = () => {
    const value = this.state.form.year;
    const currentDate = new Date();

    if (!value) return 'warning';
    else if (value > currentDate.getFullYear()) return 'error'; 
    else return 'success';
  };

  /* Rating validator 

  getValidationRatingState = () => {
    const value = this.state.form.rating;
    const currentDate = new Date();
    if (!value) return 'warning';
    else if (value < 0 || value > 10 ) return 'error'; 
    else return 'success';
  };
*/


  // ## Form handlers: Actualizan el estado del formulario cada vez que un valor del formulario cambia
  handleFormChange = event  => {
    let newForm = {...this.state.form};
    event.target.id === 'trailer' ? newForm[event.target.id].src = event.target.value : newForm[event.target.id] = event.target.value;
    this.setState({form: newForm });
  }

  // Create button
  create = ({title, description, poster_image, year, rating, directors, trailer, actors}) => {
    console.log('Creando pelicula');
    console.log(this.state.form);
  }

  render() {
    return (
        // Las props vienen del container movies.js y controlan si mostrar o no el formulario
        <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="formModal">
          <Modal.Header closeButton>
            <Modal.Title>New movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>

             { /* Poster y trailer */}
            <FormGroup controlId="poster_image" >
              <ControlLabel>Poster</ControlLabel>
              <FormControl
                type="text"
                value={this.state.form.poster_image}
                placeholder="Poster image url"
                onChange={this.handleFormChange}
              />
            </FormGroup>

            <FormGroup controlId="trailer">
              <ControlLabel>Trailer</ControlLabel>
              <FormControl
                type="text"
                value={this.state.form.trailer.src}
                placeholder="Trailer url"
                onChange={this.handleFormChange}
              />
              <FormControl.Feedback />
            </FormGroup>

            { /* Previe del trailer y la imagen */ }
            <div className="preview">
              <div className="posterImagePreview" >
                { this.state.form.poster_image && 
                  <img src={this.state.form.poster_image} width="200px" height="250px" />
                }
              </div>
              <div className="trailerPreview">
                { this.state.form.trailer.src && 
                  <iframe src={this.state.form.trailer.src} width="100%" height="250px" />
                }
              </div>
            </div>


            { /* Title */}
            <FormGroup
              controlId="title"
              validationState={this.getValidationTitleState()}
            >
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.form.title}
                placeholder="Title"
                onChange={this.handleFormChange}
              />
              <FormControl.Feedback />
              <HelpBlock>More than 5 characters</HelpBlock>
            </FormGroup>


            { /* Description */}
            <FormGroup
              controlId="description"
              validationState={this.getValidationDescriptionState()}
            >
              <ControlLabel>Description</ControlLabel>
              <FormControl
                type="text"
                componentClass="textarea"
                value={this.state.form.description}
                placeholder="Description"
                onChange={this.handleFormChange}
              />
              <FormControl.Feedback />
              <HelpBlock>More than 50 characters</HelpBlock>
            </FormGroup>

            { /* Year */}
            <FormGroup
              controlId="year"
              validationState={this.getValidationYearState()}
            >
              <ControlLabel>Year</ControlLabel>
              <FormControl
                type="number"
                value={this.state.form.year}
                placeholder="Year"
                onChange={this.handleFormChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Cannot add films that has been not released</HelpBlock>
            </FormGroup>


            { /* Rating */}
            {/* <FormGroup controlId="formRating" validationState={this.getValidationRatingState()} >
              <ControlLabel>Rating</ControlLabel>
              <FormControl
                type="number"
                value={this.state.form.rating}
                placeholder="Rating"
                onChange={this.handleRatingChange}
              />
              <FormControl.Feedback />
              <HelpBlock>0 - 10</HelpBlock>
            </FormGroup> */}
        
          </form>
         </Modal.Body>

          <Modal.Footer>
            <Button onClick={ () => this.create(this.state.form)}>Create</Button>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default MovieForm;