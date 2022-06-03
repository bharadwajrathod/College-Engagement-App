const User = require("../model/user")
const bcrypt =require("bcrypt");
const { use } = require("bcrypt/promises");

exports.logout = (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect("/");
}

exports.postSignUp = async (req, res) => {
    let fullName = req.body.fullName,
    email = req.body.email,
    password = req.body.password;
    
    let usertaken = await User.findOne({email: req.body.email});
    if(usertaken){
        await req.flash('message',"Already registered");
        res.redirect("/signup");
    }
    else{
        let username = email.split("@")[0]
        
        let hashedPassword = await bcrypt.hash(password,12);
        
        const user = await User.create({
            name: fullName,
            email,
            password : hashedPassword,
            admin: false,
            username: username,
            posts: [{}]
        })
        
        // console.log(user)
        req.session.isLoggedIn =true;
        req.session.user=user;
        res.redirect("/");
    }
}

exports.postLogin = async (req, res) => {
    try{
        let user = await User.findOne({email: req.body.email});
        if (user) {
            let password=req.body.password, hashedPassword=user.password;
            const result = await bcrypt.compare(password,hashedPassword);
            if(result){
                req.session.isLoggedIn = true;
                req.session.user=user;
                res.redirect("/");
            }
            else{
                await req.flash('message',"Invalid email or password")
                res.redirect("/login")
            }
        } 
        else {
            await req.flash('message',"Invalid email")
            res.redirect("/login")
        }
    } catch(err){
        console.log(err);
    }
}

exports.getLogin = async (req, res) => { // res.setHeader('Set-Cookie','isLogged=True')
    if(req.session.isLoggedIn){
        return res.redirect("/");
    }
    const message= await req.consumeFlash('message')
    res.render("register/login",{message:message[0]});
}
exports.getSignUp = async (req, res) => {
    if(req.session.isLoggedIn){
        return res.redirect("/");
    }
    const message= await req.consumeFlash('message')
    res.render("register/signup",{message:message[0]});
}
