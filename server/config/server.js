module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
<<<<<<< HEAD
  port: env.int("PORT", 1337),
=======
  port: env.int("PORT"),
  url: "https://e-comm-backend-hlvb.onrender.com/",
>>>>>>> parent of 9c9e81b (Added proxy: true and links to admin.js)
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
