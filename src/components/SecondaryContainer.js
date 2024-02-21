import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)

  return (
    <div className=' bg-black px-3'>
      <div className='-mt-52  relative z-30'>
          <MoviesList title={"Now playing"} movies={movies?.nowPlayingMovies}/>
          <MoviesList title={"Popular"} movies={movies?.popularMovies}/>
      </div>
    
    </div>
  )
}

export default SecondaryContainer
