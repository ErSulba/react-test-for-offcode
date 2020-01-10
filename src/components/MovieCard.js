import React from 'react'
/**
 * este componente renderiza cada uno de los resultados y nos pide que obligaoriamente le pasemos el poster, titulo, la id de imdb y el tipo que es
 */
export default ({ Poster, Title, Year, imdbID, Type }) => {
  // esto es simplemente el link que construimos para llevar al usuario a imdb
  const imdbLink = `https://www.imdb.com/title/${imdbID}`
  return (
    <div className='card col-md-4 col-lg-2'>
      <img className='card-img-top' src={Poster} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>TITLE - {Title}</h5>
        <p className='card-text'>DESC - {Type}</p>
        {/* aca implementamos el link en este anchor */}
        <a href={imdbLink} className='btn btn-primary' target='_blank'>
          Go to IMDB
        </a>
      </div>
    </div>
  )
}
