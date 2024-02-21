import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const GetNowPlayingMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=>{
      GetNowPlayingMovies()
    },[])
}
export default useNowPlayingMovies