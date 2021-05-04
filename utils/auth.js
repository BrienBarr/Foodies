const jwt = require("jsonwebtoken");

const jwt_token =  process.env.TOKEN_SECRET || 'secret_key_mdmskskkwewweew';

exports.createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration
  };
  return jwt.sign(payload, jwt_token, {
    expiresIn: duration,
  });
};