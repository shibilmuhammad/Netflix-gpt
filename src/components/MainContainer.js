import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {
    useNowPlayingMovies()
    let movies = useSelector((store)=>store.movies.nowPlayingMovies)
    if(!movies) return ;
    const MainMovie = movies[movies.length-1]
    const {original_title ,overview ,id} =  MainMovie
  return (
    <div>
        <VideoTitle  title={original_title}  overView = {overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
