const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export const getTrending = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/day?language=en-US`, options);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Failed to fetch trending movies:", error);
    return []; 
  }
};


export const getMovie = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?language=en-US`, options);
    const data = await response.json();
    return data.cast; 
  } catch (error) {
    console.error("Failed to fetch movie:", error);
    return []; 
  }
};


export const getPopular = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, options);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    return []; 
  }
};

export const getUpcoming = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/upcoming?language=en-US&page=1`, options);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Failed to fetch upcoming movies:", error);
    return []; 
  }
};

export const getInTheatres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?language=en-US`, options);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Failed to fetch now playing movies:", error);
    return []; 
  }
};

export const getTopRated = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, options);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Failed to fetch top rated movies:", error);
    return []; 
  }
};


// getTrending
// getPopular,
// getUpcoming,
// getInTheatres,
// getTopRated,