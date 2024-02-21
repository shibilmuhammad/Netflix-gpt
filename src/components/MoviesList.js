import MovieCard from "./MovieCard"


const MoviesList = ({title,movies}) => {
    
  return (
    <div className="p-3">
        <h1 className="text-2xl font-medium py-4 text-white">{title}</h1>
        <div className="flex overflow-x-auto ">
            <div className="flex space-x-3">
            {movies && movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
  )
}

export default MoviesList
