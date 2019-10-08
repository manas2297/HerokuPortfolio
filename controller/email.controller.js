const config = require("../config");
const nodemailer = require('nodemailer');

exports.getApi = (req, res) => {
  res.send("api running");
};

exports.sendMail = async (req, res) => {
  console.log("hello",req.body);
  
  let transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:config.userMail,
      pass:config.userPass
    }
  });
  transport.verify((error,success)=>{
    if(error){
      console.log(error);
    }else{
      console.log('ready');
    }
  });
  let message = {
    from:req.body.email,
    to:"yadavmanas22@gmail.com",
    title:req.body.title,
    text:req.body.message
  }
  let info  = await transport.sendMail(message);
  // console.log("sent",info.messageId);
  res.status(200).json({"id":info.messageId});
};
