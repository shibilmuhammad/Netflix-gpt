import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrialer = (movieId  )=>{
    const dispatch = useDispatch()
    
    const getMovieVideos = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json()
        let trailer = json.results[0]
        if(!trailer){
            trailer = json.results[0]
        }
        dispatch(addTrailer(trailer))
    }
    useEffect(()=>{
        getMovieVideos()
    },[])
}
export default useMovieTrialer 