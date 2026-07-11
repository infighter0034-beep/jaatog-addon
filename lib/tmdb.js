const axios = require("axios");

const API_KEY = process.env.TMDB_API_KEY;

async function getMovie(imdbId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/find/${imdbId}`,
    {
      params: {
        api_key: API_KEY,
        external_source: "imdb_id"
      }
    }
  );

  if (!data.movie_results || data.movie_results.length === 0) {
    return null;
  }

  const movie = data.movie_results[0];

  return {
    id: imdbId,
    type: "movie",
    name: movie.title,
    description: movie.overview,
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "",
    background: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "",
    releaseInfo: movie.release_date
      ? movie.release_date.split("-")[0]
      : ""
  };
}

module.exports = { getMovie };
