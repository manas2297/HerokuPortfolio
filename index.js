const express = require("express");
const cors = require("cors");
const path = require("path");
const sendGrid = require("@sendgrid/mail");

const app = express();
app.use(express.json());
app.use(cors());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// a

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   next();
// });

require("./routes")(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", 5000);
});
module.exports = {
  server
};
