import { Link } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';
import { StyledIconWrap } from './IconWrap.styled';
import { StyledPopularMovieItem } from './PopularMovieItem.styled';

export const PopularMovieItem = ({ movie, location }) => {
  return (
    <StyledPopularMovieItem>
      <StyledIconWrap>
        <AiTwotoneStar color="#F4D03F" />
      </StyledIconWrap>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.original_title || movie.name || movie.original_name}
      </Link>
    </StyledPopularMovieItem>
  );
};
