module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    id: "org.jaatog.addon",
    version: "1.0.0",

    name: "JaatOG Addon",

    description: "Personal Movies & Series",

    logo: "https://jaatog-addon.vercel.app/logo.png",

    background: "https://jaatog-addon.vercel.app/background.jpg",

    types: [
      "movie",
      "series"
    ],

    resources: [
      "meta",
      "stream"
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
