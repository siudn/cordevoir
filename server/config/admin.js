module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  port: 10000,
  url: "https://e-comm-backend-hlvb.onrender.com/",
  flags: {
    nps: env.bool("FLAG_NPS", true),
  },
});
