require("dotenv").config();
console.log(process.env.SENDGRID_API_KEY);
exports.sendgridKey = process.env.SENDGRID_API_KEY;
exports.userMail = process.env.USER_MAIL;
exports.userPass = process.env.USER_PASS;
exports.auth = {
  type: "oauth2",
  user: "yadavmanas22@gmail.com",
  clientId:
    "893885968091-2jfhv45llqkqcfpfe17su9v2mh4uh01l.apps.googleusercontent.com",
  clientSecret: "ss-5pozaOoxMSYtPbrvwkuMw",
  refreshToken:
    "1//04sSMHXdO4Vr_CgYIARAAGAQSNwF-L9IrJIN9dN5n-WZBwPefvEIWc9hqZqqshlbjztcv4YocFmO0NxijHjxDnNZ3Ine3JPWKnDA",
  accessToken:
    "ya29.Il-iBxUXnGOR0u3WcqzFmIe2VwhrcCaMdQg-BbE-BTGl5vlv9jPFbOzQNrtN_ZYm7IHG6eeWvZctkAa0jeR9DstI_TTdrJUoUKKQPC4nUA_bqvU4zYqn-sWFw2YwlPkdQw"
};
