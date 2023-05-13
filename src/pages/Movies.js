import { fetchQueryForDetails } from 'api';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const ERROR_MSG = 'Something went wrong, try again';

const Movies = () => {
  const [searchMovies, setsearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searcValue, setSearcValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    async function searchMovies() {
      try {
        setLoading(true);
        const { results } = await fetchQueryForDetails(query);
        setsearchMovies(results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [query]);

  const onSearchSubmit = () => {
    if (searcValue === '') {
      return alert('Please enter the name of the movie');
    }
    return setSearchParams({ query: searcValue.trim() });
  };
  const setSearchInputValue = value => {
    setSearcValue(value);
  };
  return (
    <div>
      <SearchInput setSearchInputValue={setSearchInputValue} />
      <button type="button" onClick={onSearchSubmit}>
        <BsSearch />
      </button>
      {loading && <div>Loading...</div>}
      {searchMovies.length > 0 && (
        <ul>
          {searchMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};
export default Movies;

// useEffect(() => {
//   if (searcValue === '') {
//     return;
//   }

//   const controller = new AbortController();
//   async function searchMovies() {
//     try {
//       setLoading(true);
//       const { results } = await fetchQueryForDetails(query, controller);
//       // console.log(results);
//       setsearchMovies(results);
//     } catch (error) {
//       setError(ERROR_MSG);
//     } finally {
//       setLoading(false);
//     }
//   }
//   searchMovies();
//   return () => {
//     controller.abort();
//   };
// }, [query, searcValue]);
