// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var User            = require('../users.js');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true, // allows us to pass back the entire request to the callback
        session: false
    },
    function(req, username, password, done) { // callback with username and password from our form

        console.log('LOCAL-LOGIN PASSPORT ENTERED', username, ":", password);
        console.log("USER Looks like", User);

        if(User.username === username && User.password === password) {
            console.log('user authenticated');
            return done(null, User);
        }

        console.log('user NOT authenticated');
        // return done(null, false);
        return done(null, false, req.flash('loginMessage', 'Invalid Login'));


    }));

};