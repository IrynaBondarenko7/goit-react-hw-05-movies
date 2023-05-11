import { Link, Outlet, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { fetchMovieDatails } from 'api';

const ERROR_MSG = 'Something went wrong, try again';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const results = await fetchMovieDatails(movieId);
        // console.log(results);
        setMovie(results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {movie !== null && (
        <div>
          {movie.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`${movie.title}`}
            />
          ) : (
            <img
              src={`https://www.shutterstock.com/image-illustration/retro-movie-art-drawing-simple-260nw-1853540983.jpg`}
              alt={`${movie.title}`}
            />
          )}

          <h2>{movie.original_title || movie.name || movie.original_name}</h2>
          <p>User score : {movie.vote_average}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Generes</p>
          <ul>
            {movie.genres.map(genere => {
              return <li key={genere.id}>{genere.name}</li>;
            })}
          </ul>
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      {error && <div>{error}</div>}
    </div>
  );
};
export default MovieDetails;

// src={
//               movie.backdrop_path
//                 ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
//                 : 'https://www.shutterstock.com/image-illustration/retro-movie-art-drawing-simple-260nw-1853540983.jpg'
//             }
