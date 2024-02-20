import { useSelector } from "react-redux";
import useMovieTrialer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrialer(movieId); 
  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);
  return (
    <div className="w-screen">
   <iframe
    className="w-screen aspect-video brightness-50"
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    ></iframe>







    </div>
  );
};

export default VideoBackground;
