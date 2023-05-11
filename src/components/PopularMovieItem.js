import { Link } from 'react-router-dom';

export const PopularMovieItem = ({ movie }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>
        {movie.original_title || movie.name || movie.original_name}
      </Link>
    </li>
  );
};
