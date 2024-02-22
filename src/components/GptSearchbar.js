import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import openai from "../utils/openAi"
import { API_OPTIONS } from "../utils/constants"
import { addMovies } from "../utils/gptSlice"


const GptSearchbar = () => {
  const dispatch = useDispatch()
  const searchInput = useRef(null)
  const fetchSearchTmdb = async (movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    return json.results
  }

  const handleSearchInput = async ()=>{
      const query = "Act as Movie recommendation system and suggest some movies for the query "+searchInput.current.value+". only give 5 movies ,comma seperated like the example result given ahead .Example result :Cast Away,Jab we met ,Life of pi ,Rab ne banadi jodi ,Yeh jawani ye diwani"
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
   
      const gptMovies = gptResult.choices[0].message.content.split(',');
      const tmpdPromises = gptMovies.map((movie)=>fetchSearchTmdb(movie));
        const searchResultTmdb =  await Promise.all(tmpdPromises);
        dispatch(addMovies({movieName:gptMovies,searchMovies:searchResultTmdb}))
  }
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12 rounded-md" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchInput} className="p-3 m-3 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceHOlder}></input>
            <button onClick={handleSearchInput} className="col-span-3 bg-red-700 m-3 py-2 px-4 text-white rounded-lg">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchbar
