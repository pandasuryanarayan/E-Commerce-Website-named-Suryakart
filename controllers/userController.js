const User  = require('../models/user');

const userController = {
    signUp: async (req, res) => {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        try {
            await newUser.save();
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.redirect('/');
        }
    },

    login: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const foundUser = await User.findOne({ email: email, password: password}).exec();
            if (foundUser) {
                res.redirect('/mainportal');
            } else {
                res.redirect('/');
            }
        } catch (err) {
            console.error(err);
        }
    } 
};

module.exports = userController;