//First lload require dependencies//

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

//Now we use express to setup of server that will run on poort 5000//
const port=3001
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log(`Server Running on port ${port}`));
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // hostname
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
 });
 transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });
  app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.values.emaill}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.values.emaill}`,
    text: `${req.body.values.mesg}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
 });
