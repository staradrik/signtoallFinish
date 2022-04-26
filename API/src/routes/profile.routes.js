const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../keys");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("bloqueado");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (token === null) {
    return res.status(401).send("servicio bloqueado");
  }

  const payload = jwt.verify(token, jwtSecret);
  req.userId = payload.id;
  next();
}

router.get("/profile", verifyToken, (req, res) => {
  res.send("Entraste!");
});

module.exports = router;
