const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createJWT, } = require("../utils/auth");
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const jwt_token =  process.env.TOKEN_SECRET || 'secret_key_mdmskskkwewweew';

exports.signup = (req, res, next) => {
  let { userName, first_name, last_name, email, password, password_confirmation } = req.body;
  let errors = [];
  if (!userName) {
    errors.push({ userName: "required" });
  }
  if (!first_name) {
    errors.push({ first_name: "required" });
  }
  if (!last_name) {
    errors.push({ last_name: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
      password_confirmation: "required",
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({email: email})
  .then(user=>{
    if(user){
      return res.status(422).json({ errors: [{ user: "email already exists" }] });
    }else {
      const user = new User({
        userName: userName,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });
      bcrypt.genSalt(10, function(err, salt) { 
        bcrypt.hash(password, salt, function(err, hash) {
          if (err) throw err;
          user.password = hash;
          user.save()
          .then(response => {
            // delete response.password;
            res.status(200).json({
              data: {
                message: response,
                success: true
              }
            })
          })
          .catch(err => {
            res.status(500).json({
              errors: [{ error: err }]
            });
          });
        });
      });
    }
  })
  .catch(err =>{
    res.status(500).json({
      errors: [{ error: 'Something went wrong' }]
    });
  })
}

exports.signin = (req, res) => {
  console.log("signin attempt");
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(404).json({
        errors: [{ user: "not found" }],
      });
    } else {
      console.log("user found")
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) {
          return res.status(400).json({ 
            errors: [{ password:"incorrect" }] 
          });
        }


        let access_token = createJWT(
          user.email,
          user._id,
          3600
        );
        jwt.verify(access_token, jwt_token, (err, decoded) => {
          if (err) {
            res.status(500).json({ erros: err });
          }
          if (decoded) {
            // delete user.password;
            console.log(user.password);
            // if(!user.password){

              return res.status(200).json({
                success: true,
                token: access_token,
                message: user
              });

            // }
            
          }
        });
      })
      .catch(err => {
        console.log(password, user.password);
        console.log(err);
        res.status(500).json({ erros: err });
      });
    }
  })
  .catch(err => {
    res.status(500).json({ erros: err });
  });
}

exports.logout = (req, res) => {
  console.log("logging out");
  res.redirect("/");
}