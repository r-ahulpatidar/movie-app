import Movie from './Movie';
import NotFound from './NotFound';

const MovieList = (props) => {
  const { movies } = props;
  // console.log(movies);
  return (
    <div className="flex justify-center flex-wrap">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default MovieList;
