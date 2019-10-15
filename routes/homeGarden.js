const db = require("../models");
const express = require("express");
const router = require("express").Router();
const homegarden = require("../controllers/homegardenController");

router.route("/homegardenproducts").get(homegarden.findAll);

//console.log(db);

module.exports = router;
