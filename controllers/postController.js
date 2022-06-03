const Post = require("../model/post");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({});
        res.render("blog.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotice = async (req, res) => {
    try {
        const notice = await Post.find({});
        res.render("notice.ejs", {notice});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllInterview = async (req, res) => {
    try {
        const Interview = await Post.find({});
        res.render("interview.ejs", {Interview});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllContent = async (req, res) => {
    try {

        var today = new Date();
        const content = await Post.find({});
        id = req.query.id;
        console.log(content[id].title);



        res.render("content.ejs", {
            content,
           
            id,
            today
        });


    } catch (err) {
        console.log(err);
    }
};

