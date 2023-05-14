import { fetchPopularMovies } from 'api';
import { PopularMovieItem } from 'components/PopularMovieItem';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
    <div>
      {loading && <div>Loading...</div>}
      <h2>Tranding today</h2>
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
    </div>
  );
};
export default Home;

PopularMovieItem.propTypes = {
  movie: PropTypes.object,
  location: PropTypes.object,
};
