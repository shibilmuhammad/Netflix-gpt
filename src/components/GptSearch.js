import { BG_LOGIN } from "../utils/constants"
import GptMovieSuggessions from "./GptMovieSuggessions"
import GptSearchbar from "./GptSearchbar"


const GptSearch = () => {
  return (
    <div>
         <div className='fixed -z-10 shadow-2xl ' >
            <img className=' brightness-50 bg-gradient-to-b from-black' alt='background' src={BG_LOGIN}></img>
        </div>
        <GptSearchbar />
        <GptMovieSuggessions />
    </div>
  )
}

export default GptSearch
