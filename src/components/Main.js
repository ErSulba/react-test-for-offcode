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


import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

//Librerías a incluir


/**
 * API Key para conectar a OMDB
 * @type {String}
 */
const API_KEY = "";

class Main extends Component{

	constructor(props) {
	  super(props);
	  
	  this.state = { 
	  	
	  };
	}

	render(){

		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col text-center">
						<div className="mainDiv">
							<h3>OMDB</h3>
							<h1>BUSQUEDA</h1>
							<div className="d-inline-block">
								<form action="" className="form-inline" onSubmit={this.getData}>
									<div className="form-group">
										<input type="text" placeholder="Titulo" className="form-control" value={this.state.searchTerm} onChange={this.onInputChange} />
									</div>
									<div className="form-group">
										<button className="btn btn-primary">Buscar</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="row results">
					<div className="col-6 col-sm-4 col-md-3 col-lg-3">
						<div className="card" >
							<img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">TITLE - Guardians of the Galaxy Vol. 2</h5>
								<p className="card-text">DESC - Action, Adventure</p>
								<a href="#link-to-imdb" className="btn btn-primary">Go to IMDB</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main;