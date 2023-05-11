import { fetchCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ERROR_MSG = 'Something went wrong, try again';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const { cast } = await fetchCast(movieId);
        console.log(cast);
        setCast(cast);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  console.log(cast);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {cast !== null && (
        <ul>
          {cast.map(actor => {
            const profile = actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              : 'https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png';
            return (
              <li key={actor.id}>
                <img src={profile} alt={actor.name} width="150" />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}

      {error && <div>{error}</div>}
    </div>
  );
};
export default Cast;
