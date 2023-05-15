import { fetchPopularMovies } from 'api';
import { PopularMovieItem } from 'components/PopularMovieItem/PopularMovieItem';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { StyledHomeTitle } from 'components/Home/Title.styled';
import { StyledSectionContainer } from 'components/SectionContainer.styled';

const ERROR_MSG = 'Something went wrong, try again';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const { results } = await fetchPopularMovies();
        setPopularMovies(results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <StyledSectionContainer>
      {loading && <div>Loading...</div>}
      <StyledHomeTitle>Tranding today</StyledHomeTitle>
      <ul>
        {popularMovies.map(movie => {
          return (
            <PopularMovieItem
              key={movie.id}
              movie={movie}
              location={location}
            />
          );
        })}
      </ul>
      {error && <div>{error}</div>}
    </StyledSectionContainer>
  );
};
export default Home;

PopularMovieItem.propTypes = {
  movie: PropTypes.object,
  location: PropTypes.object,
};
