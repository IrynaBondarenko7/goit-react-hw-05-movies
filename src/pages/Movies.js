import { fetchQueryForDetails } from 'api';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { PropTypes } from 'prop-types';
import { StyledSectionContainer } from 'components/SectionContainer.styled';
import { StyledInputWrap } from 'components/SearchInput/InputWrap.styled';
import { StyledButton } from 'components/SearchInput/Button.style';
import { StyledIconWrap } from 'components/PopularMovieItem/IconWrap.styled';
import { TbMovie } from 'react-icons/tb';
import { StyledMovieItem } from 'components/MovieItem.styled';

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
    <StyledSectionContainer>
      <StyledInputWrap>
        <SearchInput setSearchInputValue={setSearchInputValue} />
        <StyledButton type="button" onClick={onSearchSubmit}>
          <BsSearch color="#fff" />
        </StyledButton>
      </StyledInputWrap>

      {loading && <div>Loading...</div>}
      {searchMovies.length > 0 && (
        <ul>
          {searchMovies.map(movie => {
            return (
              <StyledMovieItem key={movie.id}>
                <StyledIconWrap>
                  <TbMovie color="#6E2C00" />
                </StyledIconWrap>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </StyledMovieItem>
            );
          })}
        </ul>
      )}
      {error && <div>{error}</div>}
    </StyledSectionContainer>
  );
};
export default Movies;

SearchInput.propTypes = {
  setSearchInputValue: PropTypes.func.isRequired,
};
