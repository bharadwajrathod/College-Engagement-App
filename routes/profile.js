const express = require("express");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();
const {getAllProfilePost}=  require("../controllers/profileController");

router.get("/profile",isAuth ,getAllProfilePost);

module.exports = router;
