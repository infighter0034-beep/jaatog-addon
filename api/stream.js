const movies = require("../data/movies.json");

module.exports = async (req, res) => {
  const imdbId = req.query.id;

  if (!imdbId) {
    return res.status(400).json({
      error: "IMDb ID missing"
    });
  }

  const movie = movies.find((m) => m.imdb === imdbId);

  if (!movie) {
    return res.json({
      streams: []
    });
  }

  const streams = movie.streams.map((s) => ({
    title: `${s.quality} • ${s.audio}`,
    url: s.url
  }));

  res.json({
    streams
  });
};
