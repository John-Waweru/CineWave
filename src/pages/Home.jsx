import { useState, useEffect } from "react";
import MovieDropdown from "../components/DropDown"
import MovieCard from "../components/MovieCard"
import {
  getTrending,
  getPopular,
  getUpcoming,
  getInTheatres,
  getTopRated,
} from "../Services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("trending");

  const apiMap = {
    trending: getTrending,
    popular: getPopular,
    upcoming: getUpcoming,
    in_theatres: getInTheatres,
    top_rated: getTopRated,
  };

  const loadMovies = async (cat) => {
    setLoading(true);
    setError(null);
    try {
      const apiFunc = apiMap[cat];
      if (!apiFunc) throw new Error("Invalid category");
      const data = await apiFunc();
      setMovies(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(category);
  }, [category]);

  const handleSelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex w-full justify-center mb-6">
          <MovieDropdown onSelect={handleSelect} />
        </div>

        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center capitalize">
          {category.replace("_", " ")} Movies
        </h1>

        {error && (
          <div className="text-red-400 text-center mb-4 text-lg">{error}</div>
        )}

        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
            <div className="grid w-full max-w-7xl gap-6 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
