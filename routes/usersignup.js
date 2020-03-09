var express = require("express");
var router = express.Router();
const db = require("../config/db.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const signupModel = require("../models/model.authentication");

dotenv.config();

router.post("/add", async (req, res, next) => {
  //hasing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //checking if the user is already in the database
  await signupModel
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
      //if user not found
      if (!user) {
        signupModel
          .create({
            number: req.body.number,
            email: req.body.email,
            password: hashPassword,
            username: req.body.username
          })
          .then(signup => {
            console.log("hascode :", signup.password);
            res.send("succesfully registered");
          })
          .catch(err => console.log(err));
      } else {
        //email in use
        res.send("email in use");
        console.log("email already in use!");
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/login", async (req, res, next) => {
  await signupModel
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(login => {
      if (login) {
        bcrypt.compare(req.body.password, login.password).then(result => {
          if (result) {
            const token = jwt.sign(
              { _id: login._id },
              process.env.TOKEN_SECRET
            );
            console.log("logged in");
            res.header("auth-token", token).send(token);
          } else {
            res.send("Invalid password or Email");
          }
        });
      } else {
        next(new Error("Invalid Login"));
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
