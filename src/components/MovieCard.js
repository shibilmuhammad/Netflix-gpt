import { IMG_POSTER_CDN } from "../utils/constants"


const MovieCard = ({posterPath}) => {

  return (
    <div className="w-36   ">
        <img className="rounded-lg" alt="cardimage" src={IMG_POSTER_CDN+posterPath}></img>
    </div>
  )
}

export default MovieCard
