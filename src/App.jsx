import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { API_URL, getMovies } from './api/api';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(API_URL).then((data) => {
      setMovies(data.results);
    });
  }, []);
  console.log('movies', movies);

  const handleSearch = (searchOutput) => {
    setMovies(searchOutput.results);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
