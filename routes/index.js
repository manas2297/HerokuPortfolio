const email = require("./email.route");

module.exports = app => {
  app.use("/api/email", email);
};
