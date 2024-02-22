import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";

const GptMovieSuggessions = () => {
  const {movieName,searchMovies} = useSelector((store)=>store.gpt);
  if(!movieName) return null
  return (
    <div>
        {movieName.map((movieName,index)=>{
          return  <MoviesList key={movieName} title={movieName} movies={searchMovies[index]} />
        })}
    </div>
  )
}

export default GptMovieSuggessions
