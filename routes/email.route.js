const email = require("../controller/email.controller");
const express = require("express");
const router = express.Router();

router.get("/", email.getApi);
router.post("/", email.sendMail);

module.exports = router;
