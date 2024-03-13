import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies copy"
import VideoTitle from "./VideoTitle"
import usePopularMovies from "../hooks/usePopularMovies"
import VideoBackground  from "./VideoBackground"

const MainContainer = () => {
    useNowPlayingMovies()
    usePopularMovies()
    let movies = useSelector((store)=>store.movies.nowPlayingMovies)
    if(!movies) return ;
    const MainMovie = movies[0]
    const {original_title ,overview ,id} =  MainMovie
  return (
    <div>
        <VideoTitle  title={original_title}  overView = {overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
