import { TMDB_API_KEY, TMDB_BASE_URL } from '@env';
import axios from 'axios';

export const getMovies = async () => {
  const res = await axios.get(`${TMDB_BASE_URL}movies/popular`, {
    params: {
      api_key: TMDB_API_KEY,
    },
  });

  return res.data;
};
