import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const MovieDetails = () => {
  return (
    <div>
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
    </div>
  );
};
export default MovieDetails;
