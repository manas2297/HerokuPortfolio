require("dotenv").config();
console.log(process.env.SENDGRID_API_KEY);
exports.sendgridKey = process.env.SENDGRID_API_KEY;
exports.userMail = process.env.USER_MAIL;
exports.userPass = process.env.USER_PASS;
