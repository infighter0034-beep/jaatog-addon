const { getMovie } = require("../lib/tmdb");

module.exports = async (req, res) => {
  const imdbId = req.query.id;

  if (!imdbId) {
    return res.status(400).json({
      error: "IMDb ID missing"
    });
  }

  try {
    const movie = await getMovie(imdbId);

    if (!movie) {
      return res.status(404).json({
        error: "Movie not found"
      });
    }

    res.json(movie);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};
