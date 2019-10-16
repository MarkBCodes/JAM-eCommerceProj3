const db = require("../models");
const express = require("express");
const router = require("express").Router();
const jewelry = require("../controllers/jewelryController");

router.route("/").get(jewelry.findAll);

//console.log(db);

module.exports = router;
