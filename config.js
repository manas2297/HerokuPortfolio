require("dotenv").config();
console.log(process.env.SENDGRID_API_KEY);
exports.sendgridKey = process.env.SENDGRID_API_KEY;
exports.userMail = process.env.USER_MAIL;
exports.userPass = process.env.USER_PASS;
exports.auth = {
  type: "oauth2",
  user: "yadavmanas22@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
  accessToken: process.env.ACCESS_TOKEN
};
