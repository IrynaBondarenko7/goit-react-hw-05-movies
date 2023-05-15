import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { fetchMovieDatails } from 'api';
import { BsArrowLeft } from 'react-icons/bs';
import { StyledSectionContainer } from 'components/SectionContainer.styled';
import { StyledBackLink } from 'components/BackLink.styled';
import {
  StyledGeneresList,
  StyledMovieDetailsWrap,
  StyledMovieTitle,
  StyledOverview,
  StyledSubPageTitle,
  StyledSubTitle,
  SubpageLinkList,
} from 'components/MovieDetails/MovieDetails.styled';

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

  return (
    <StyledSectionContainer>
      <StyledBackLink to={backLincLocation.current}>
        {<BsArrowLeft />}Back
      </StyledBackLink>
      {loading && <div>Loading...</div>}
      {movie !== null && (
        <StyledMovieDetailsWrap>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title}`}
              width={300}
              height={500}
            />
          ) : (
            <img
              src={`https://www.shutterstock.com/image-illustration/retro-movie-art-drawing-simple-260nw-1853540983.jpg`}
              alt={`${movie.title}`}
              width={300}
              height={500}
            />
          )}

          <div>
            <StyledMovieTitle>
              {movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name}
            </StyledMovieTitle>
            <StyledSubTitle>
              User score :<span>{Math.round(movie.vote_average * 10)}%</span>
            </StyledSubTitle>
            <StyledSubTitle>Overview</StyledSubTitle>
            <StyledOverview>{movie.overview}</StyledOverview>
            <StyledSubTitle>Generes</StyledSubTitle>
            <StyledGeneresList>
              {movie.genres.map(genere => {
                return <li key={genere.id}>{genere.name}</li>;
              })}
            </StyledGeneresList>
          </div>
        </StyledMovieDetailsWrap>
      )}
      <StyledSubPageTitle>Additional information</StyledSubPageTitle>
      <SubpageLinkList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </SubpageLinkList>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      {error && <div>{error}</div>}
    </StyledSectionContainer>
  );
};
export default MovieDetails;
