const { getMovie } = require("../lib/tmdb");

module.exports = async (req, res) => {
  const imdbId = req.query.id;

  if (!imdbId) {
    return res.status(400).json({
      error: "Missing IMDb ID",
    });
  }

  try {
    const movie = await getMovie(imdbId);

    if (!movie) {
      return res.status(404).json({
        error: "Movie not found",
      });
    }

    return res.json(movie);
  } catch (e) {
    return res.status(500).json({
      error: e.message,
    });
  }
};
