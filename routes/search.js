const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/search", (req, res) => {
   res.render("search.ejs");
});

module.exports = router;

