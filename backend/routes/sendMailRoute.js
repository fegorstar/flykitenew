const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/sendMailController");

router.post("/sendMail", sendMail);

module.exports = router;