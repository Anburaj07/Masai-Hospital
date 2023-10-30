const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (decoded) {
        next();
      } else {
        res.status(400).json({ err });
      }
    });
  } else {
    res.status(400).json({ msg: "Please login!" });
  }
};

module.exports = { auth };
