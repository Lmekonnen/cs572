// const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")
// const user = mongoose.model("User")
// sendUserCreateResult = function (err, user, res) {
//     if (err) {
//         console.log("create a user error", err);
//         res.status(500).json(err)
//     } else {
//         console.log("create created", err);
//         res.status(201).json(user)
//     }
//     CreateUsersUsingHashedPassword = function (err, hashPassword, req) {
//         if (err) {
//             console.log("Bcrypt hash generation error", err);
//             res.status(500).json(err);
//         } else {
//             const newUser = {
//                 username: req.body.username,
//                 password: hashPassword,
//                 name: req.body.name
//             }
//             user.create(newUser, (err,res)=>sendUserCreateResult(err,res))
//         }
//     }
//     const createUserUsingHashAndSalt = function (err, salt, req) {
//         if (err) {
//             console.log("Bcrypt salt generation error", err);
//             res.status(500).json(err);
//         } else {
//             bcrypt.hash(req.body.password, salt, (err,response)=>CreateUsersUsingHashedPassword(err,response,req,res))
//         }
//     }
//     module.exports.addUser = function (req, res) {
//         bcrypt.genSalt(10, (err, result) => createUserUsingHashAndSalt.bind(err, result, req,res))
//     }
// }
require("../data/dbConnection");
const mongoose = require("mongoose");
const users = mongoose.model("User");
const bcrypt = require("bcrypt");

module.exports.addUser = function (req, res) {
    console.log("POST a user request");
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            console.log("bcrypt salt generation error");
        } else {
            bcrypt.hash(req.body.password, salt, function (err, hashPasswd) {
                if (err) {
                    console.log('Bcrypt hash generation error');
                    res.status(500).json(err)
                } else {
                    const newUser = {
                        userName: req.body.userName,
                        password: hashPasswd,
                        name: req.body.name
                    }
                    users.create(newUser, function (err, users) {
                        if (err) {
                            console.log("Error creating name");
                        }
                        else {
                            console.log("user successfully added");
                            res.status(200).json(users)
                        }
                    });
                }
            });
        }
    });
}