const User = require("../models/User");
const bcyrpt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new localStrategy({ usernameField: "email"}, (email, password, done) => {
        User.findOne(user => {
            if (!user) {
                const newUser = new User({ email, password });
                bcyrpt.genSalt(10, (err, salt) => {
                    bcyrpt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                return done(null, user);
                            })
                            .catch(err => {
                                return done(null, false, { message: err });
                            });
                    });
                });
            } else {
                bcyrpt.compare(passowrd, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Wrong passowrd" });
                    }
                });
            }
        })
        .catch(err => {
            return done(null, false, {message: err});
        });
    })
);
module.exports = passport;