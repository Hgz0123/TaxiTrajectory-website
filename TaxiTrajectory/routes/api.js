var express = require("express");
var router = express.Router();

//handle function
var example = require("./api/example");

//set routers
router.get("/example", example.Example);

module.exports = router;