const express = require("express");
const path = require("path");
const router = express.Router();
const {getAllBlogs,getAllNotice,getAllInterview,getAllContent} = require('../controllers/postController')
router.get("/blog", getAllBlogs);

router.get("/notice", getAllNotice );

router.get("/interview", getAllInterview);

router.get("/content", getAllContent);

module.exports = router;
