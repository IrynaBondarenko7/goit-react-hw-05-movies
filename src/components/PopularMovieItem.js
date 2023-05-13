import { Link } from 'react-router-dom';

export const PopularMovieItem = ({ movie, location }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.original_title || movie.name || movie.original_name}
      </Link>
    </li>
  );
};
