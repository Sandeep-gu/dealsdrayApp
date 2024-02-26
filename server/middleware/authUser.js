const JWT = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

//validation middleware
const validationMiddleware = async (req, res, next) => {
  const validator = body("email").isEmail();
  try {
    const errors = validationResult(validator);
    console.log("error", errors);
    if (!errors.isEmpty) {
      res.status(402).send({
        success: false,
        message: "Please Enter right Credentials",
      });
    }
    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
};

const authUserMiddleware = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.SECRETE_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { validationMiddleware, authUserMiddleware };
