const Post = require("../model/post");

exports.getAllProfilePost = async (req, res) => {
    try {
        const profilepost = await Post.find({author:req.session.user.username});
        res.render("profile.ejs", {profilepost});
    } catch (err) {
        console.log(err);
    }
};