/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Sheena Vicky Hathiwala Student ID: 127759215 Date: 03 February 2023
 *  Cyclic Link: _______________________________________________________________
 *
 ********************************************************************************/

const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/rentals", (req, res) => {
  res.status(200).send("Rentals page");
});

app.get("/sign-up", (req, res) => {
  res.status(200).send("Signup page");
});

app.get("/log-in", (req, res) => {
  res.status(200).send("Login page");
});

app.listen(port, () => {
  console.log(`server listening on: ${port}`);
});
