const { body, validationResult } = require("express-validator");

const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors = [];

  const titleRegex = /[a-zA-Z0-9-\s]{1,255}/;
  const directorRegex = /[a-zA-Z-\ ]{1,255}/;
  const yearRegex = /[0-9]{1,4}/;
  const colorRegex = /[a-zA-Z0-9-\ ]{1,255}/;
  const durationRegex = /[0-9]{1,}/;

  if (!titleRegex.test(title)) {
    errors.push({ field: "title", message: "Invalid title" });
  }
  if (!directorRegex.test(director)) {
    errors.push({ field: "director", message: "Invalid director" });
  }
  if (!yearRegex.test(year)) {
    errors.push({ field: "year", message: "Invalid year" });
  }
  if (!colorRegex.test(color)) {
    errors.push({ field: "color", message: "Invalid color" });
  }
  if (!durationRegex.test(duration)) {
    errors.push({ field: "duration", message: "Invalid duration" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];

  const firstnameRegex = /[a-zA-Z-\ ]{1,255}/;
  const lastnameRegex = /[a-zA-Z-\ ]{1,255}/;
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const cityRegex = /[a-zA-Z-\ ]{1,255}/;
  const languageRegex = /[a-zA-Z-\ ]{1,255}/;

  if (!firstnameRegex.test(firstname)) {
    errors.push({ field: "firstname", message: "Invalid firstname" });
  }
  if (!lastnameRegex.test(lastname)) {
    errors.push({ field: "lastname", message: "Invalid lastname" });
  }
  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }
  if (!cityRegex.test(city)) {
    errors.push({ field: "city", message: "Invalid city" });
  }
  if (!languageRegex.test(language)) {
    errors.push({ field: "language", message: "Invalid language" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  validateMovie,
  validateUser,
};
