const express = require('express');
const {
    check,
    validationResult
} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require('../model/userModel')

router.post('/signup', [
        check('userName', "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("passWord", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array()
            });
        }

        const {
            userName,
            email,
            passWord
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({
                userName,
                email,
                passWord
            });

            const salt = await bcrypt.genSalt(10);
            console.log(salt, 'saltHash:::::::');
            user.passWord = await bcrypt.hash(passWord, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };
            console.log(payload, 'payload::::::::::');

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        data: {
                            id: user._id,
                            userName: user.userName,
                            email: user.email
                        },
                        token,
                        msg: 'Registered user successfully!'
                    });
                }
            );

        } catch (error) {
            console.log(error.message);
            res.status(500).send("Error in Saving");
        }
    }
)

router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("passWord", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            email,
            passWord
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });

            console.log(passWord, 'passWord::::::::::');
            const isMatch = await bcrypt.compare(passWord, user.passWord);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token,
                        data: {
                            id: user._id,
                            userName: user.userName,
                            email: user.email
                        },
                        msg: 'Login successful!'
                    });
                }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
)


module.exports = router