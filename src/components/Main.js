/*
===========================================================================================================================

        ___ ___              __
 ___   / _// _/____ ___  ___/ /___
/ _ \ / _// _// __// _ \/ _  // -_)
\___//_/ /_/  \__/ \___/\_,_/ \__/


==================================
REACT JS - APIs
==================================

Crear una aplicación para buscar y obtener posters de películas y links a IMDB, utilizando la API de OMDB (http://www.omdbapi.com/)
La app contiene un resultado de ejemplo como guía para maquetado.

En base al diseño provisto, generar resultados contra la búsqueda ingresada por el usuario.


Reglas básicas:
- No hay directivas en la cantidad de componentes a utilizar. Se puede resolver en un solo componente o usando sub-componentes.
- En lo posible, capturar las respuestas fallidas o de error de la API.


Tips:
- Para utilizar OMDB es necesario crear una API KEY.
- El proyecto incluye algunas librerias que pueden ser de utildad para el ejercicio. Revisar.

===========================================================================================================================
 */

import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MovieCard from './MovieCard'

//Librerías a incluir

/**
 * API Key para conectar a OMDB
 * @type {String}
 */
const API_KEY = '44c3dae1'

/**
 * primero que nada el componente lo cambie a un componente funcional porque el reto estaba sencillo, la gran diferencia se nota en el uso de los hooks
 */
function Main() {
  // aca use hooks para manejar el state de la aplicacion, uno para el valor del input y otro para almacenar el resultado de nuestra busqueda
  const [searchResults, setSearchResults] = useState([])
  const [userInput, setUserInput] = useState('')

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event este es el evento que le pasa la funcion onChange cada vez que se dispara
   */
  const handleChange = event => {
    setUserInput(event.target.value)
  }

  /**
   * handlesubmit se usa cuando el usuario presiona enter o el boton submit el cual procesa un fetch que hace un request a la API y nos devuelve un response, el cual nosotros usaremos despues
   * @param {React.FormEvent<HTMLFormElement>} event este es el evento que le pasa la funcion onSubmit a nuestro metodo
   */
  const handleSubmit = event => {
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${userInput}`).then(
      resp => {
        // resp es la respuesta que obtuvimos del servidor pero asi no nos sirve de mucho, lo que debemos hacer es darle el formato adecuado con el metdo json() el cual devulve otra promesa con la respuesta ya formateada a como la deseamos
        resp.json().then(json => {
          json.Search && setSearchResults(json.Search)
        })
      }
    )
  }

  /**
   * esta constante es un simple map a nuestra variable de los resultados que estan almacenadas en nuestro estado usando el nuevo componente que creamos
   */
  const listOfMovies = searchResults.map(movie => (
    <MovieCard {...movie}></MovieCard>
  ))

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col text-center'>
          <div className='mainDiv'>
            <h3>OMDB</h3>
            <h1>BUSQUEDA</h1>
            <div className='d-inline-block'>
              <form action='' className='form-inline' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Titulo'
                    className='form-control'
                    value={userInput}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <button className='btn btn-primary'>Buscar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='row results'>{listOfMovies}</div>
    </div>
  )
}

export default Main
