const sgMail = require("@sendgrid/mail");
const config = require("../config");
exports.getApi = (req, res) => {
  res.send("api running");
};

exports.sendMail = (req, res) => {
  console.log(config.sendgridKey);
  sgMail.setApiKey(config.sendgridKey);
  console.log("hello");
  const msg = {
    to: "yadavmanas22@gmail.com",
    from: req.body.email,
    subject: req.body.title,
    text: req.body.message
  };
  sgMail
    .send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err.response.body);
      res.status(500).json({
        success: false
      });
    });
};
