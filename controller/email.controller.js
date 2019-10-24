const config = require("../config");
const nodemailer = require("nodemailer");

exports.getApi = (req, res) => {
  res.send("api running");
};

exports.sendMail = async (req, res) => {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: config.auth
  });
  transport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("ready");
    }
  });
  let message = {
    from: req.body.email,
    to: "yadavmanas22@gmail.com",
    title: req.body.title,
    text: req.body.message
  };
  try {
    let info = await transport.sendMail(message);
    res.status(200).json({ msg: info.messageId });
  } catch (err) {
    console.log(err);
  }
};
