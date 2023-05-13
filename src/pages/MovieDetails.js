import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { fetchMovieDatails } from 'api';
import { BsArrowLeft } from 'react-icons/bs';
import { StyledMovieDetailsWrap } from 'components/MovieDetailsWrap.styled';

const ERROR_MSG = 'Something went wrong, try again';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLincLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const results = await fetchMovieDatails(movieId);

        setMovie(results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);
  let userScore = Math.round(movie.vote_average * 10);

  return (
    <div>
      <Link to={backLincLocation.current}>{<BsArrowLeft />}Back</Link>
      {loading && <div>Loading...</div>}
      {movie !== null && (
        <StyledMovieDetailsWrap>
          <div>
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.title}`}
                width={300}
                height={400}
              />
            ) : (
              <img
                src={`https://www.shutterstock.com/image-illustration/retro-movie-art-drawing-simple-260nw-1853540983.jpg`}
                alt={`${movie.title}`}
                width={300}
                height={400}
              />
            )}
          </div>
          <div>
            <h2>
              {movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name}
            </h2>
            <p>User score : {userScore}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Generes</p>
            <ul>
              {movie.genres.map(genere => {
                return <li key={genere.id}>{genere.name}</li>;
              })}
            </ul>
          </div>
        </StyledMovieDetailsWrap>
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
