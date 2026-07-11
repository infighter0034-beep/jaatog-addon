module.exports = (req, res) => {
  res.status(200).json({
    id: "org.jaatog.addon",
    version: "1.0.0",
    name: "JaatOG Addon",
    description: "Private Movies & Series",
    resources: ["stream", "meta"],
    types: ["movie", "series"],
    catalogs: [],
    idPrefixes: ["tt"]
  });
};
