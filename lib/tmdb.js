const axios = require("axios");

const API = process.env.TMDB_API_KEY;

async function getMovie(imdbId) {
  const find = await axios.get(
    `https://api.themoviedb.org/3/find/${imdbId}`,
    {
      params: {
        api_key: API,
        external_source: "imdb_id"
      }
    }
  );

  if (!find.data.movie_results.length) return null;

  const movie = find.data.movie_results[0];

  return {
    tmdbId: movie.id,
    title: movie.title,
    year: movie.release_date?.split("-")[0] || "",
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "",
    backdrop: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "",
    overview: movie.overview
  };
}

module.exports = { getMovie };
