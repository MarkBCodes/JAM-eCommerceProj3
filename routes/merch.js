const db = require("../models");
const express = require("express");
const router = require("express").Router();
const apparel = require("../controllers/apparelController");

router.route("/apparel").get(apparel.findAll);

//console.log(db);

module.exports = router;
