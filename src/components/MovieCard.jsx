import { FaHeart, FaBookmark } from 'react-icons/fa';
import { getMovie } from '../Services/api';
import { Link } from "react-router-dom"



const MovieCard = ({ movie }) => {

  const onFavoriteClick = (e)=>{
    e.preventDefault()
    console.log("favorite")
  }

  const onWishlistClick = (e)=>{
    e.preventDefault()
    console.log("wishlist")
  }
  const onMovieClick = async (e)=>{
    e.preventDefault()
    console.log(movie.id)
    const movieDesc = await getMovie(movie.id)
    console.log(movieDesc)
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <div onClick={onMovieClick} className="w-[220px] bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition duration-300">
            <div className="relative w-full h-[330px] overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover fade-mask hover:scale-110 hover:no-fade-mask duration-300"
              />

              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={onFavoriteClick}
                  className=" hover:bg-gray-700 p-2 rounded-full duration-300 bg-black hover:text-red-500"
                >
                  <FaHeart />
                </button>
              </div>
            </div>

            <div className="p-3 bg-gradient-to-b from-transparent via-gray-800 to-purple-900">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-white truncate w-4/5">{movie.title}</h3>
                <button
                  onClick={onWishlistClick}
                  className="duration-300 hover:text-yellow-500"
                >
                  <FaBookmark />
                </button>
              </div>
              <p className="text-gray-400 text-xs">{movie.release_date || "Unknown Year"}</p>
            </div>
          </div>
    </Link>
  );
};


export default MovieCard;




