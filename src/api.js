import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = 'ef0fb983e89662afab3575284ace2b44';

export const fetchPopularMovies = async () => {
  const response = await axios.get(`3/trending/all/day?api_key=${API_KEY}`);

  return response.data;
};

export const fetchMovieDatails = async id => {
  const response = await axios.get(
    `3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export const fetchQueryForDetails = async query => {
  const response = await axios.get(
    `3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};
