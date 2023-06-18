const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

export const getMovies = async (url) => {
  const response = await fetch(url);
  const data = response.json();

  return data;
};

export const getImagePath = (posterPath) => {
  return IMG_PATH + posterPath;
};

export const getClassByRate = (vote) => {
  if (vote >= 8) {
    return 'text-green-500';
  } else if (vote >= 5) {
    return 'text-orange-500';
  } else {
    return 'text-red-500';
  }
};

export { API_URL, SEARCH_API };