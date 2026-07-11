module.exports = (req, res) => {
  res.status(200).json({
    id: "org.jaatog.addon",
    version: "1.0.0",
    name: "JaatOG Addon",
    description: "Private Movies & Series",
    resources: [
      "meta",
      "stream"
    ],
    types: [
      "movie",
      "series"
    ],
    catalogs: [],
    idPrefixes: [
      "tt"
    ],
    behaviorHints: {
      configurable: false,
      configurationRequired: false
    }
  });
};
