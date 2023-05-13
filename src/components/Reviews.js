import { fetchReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ERROR_MSG = 'Something went wrong, try again';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const { results } = await fetchReviews(movieId);
        // console.log(results);
        setMovieReviews(results);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {movieReviews.length > 0 &&
        movieReviews.map(review => {
          return (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      {movieReviews.length === 0 && !loading && (
        <p>We don't have any reviews for this movie</p>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};
export default Reviews;
