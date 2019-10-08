const sgMail = require("@sendgrid/mail");
const config = require("../config");
exports.getApi = (req, res) => {
  res.send("api running");
};

exports.sendMail = (req, res) => {

};
