const jwt = require("jsonwebtoken");

function verifyJWTToken(req, res, next) {
  //first check token is present in request or not
  var token = req.headers["authorization"];

  if (token) {
    //Extract the token from string
    token = token.slice(7);

    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        res.send({ ok: false, token: "Invalid Token" });
      } else {
        next();
      }
    });
  } else {
    res.send({ ok: false, error: "Token is missing" });
  }
}

module.exports = verifyJWTToken;
