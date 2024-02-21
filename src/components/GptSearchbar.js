import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"


const GptSearchbar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
       
        <form className="bg-black w-1/2 grid grid-cols-12 rounded-md">
            <input className="p-3 m-3 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceHOlder}></input>
            <button className="col-span-3 bg-red-700 m-3 py-2 px-4 text-white rounded-lg">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchbar
