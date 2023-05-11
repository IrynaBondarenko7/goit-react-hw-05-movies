import { fetchPopularMovies } from 'api';
import { PopularMovieItem } from 'components/PopularMovieItem';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
const ERROR_MSG = 'Something went wrong, try again';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const { results } = await fetchPopularMovies();
        console.log(results);
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
      <ul>
        {popularMovies.map(movie => {
          return <PopularMovieItem key={movie.id} movie={movie} />;
        })}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};
export default Home;
