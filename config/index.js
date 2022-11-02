const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = (app) => {
  app.set("trust proxy", 1);

  //Cors para local 
  // app.use(
  //   cors({
  //     credentials: true,
  //     origin: process.env.ORIGIN || "http://localhost:3000",
  //   })
  // );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
