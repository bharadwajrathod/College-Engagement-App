const express = require("express");
const path = require("path");
const router = express.Router();
const {getInputForm,createPost} = require("../controllers/createController")
const isAuth = require("../middlewares/isAuth");
router.get("/create-post", isAuth ,getInputForm);

router.post("/create-post",isAuth,createPost);

module.exports = router
