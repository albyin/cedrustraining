// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
var User            = require('../users.js');

//get auth credentials
var googleAuth = require('../auth').googleAuth;

// expose this function to our app using module.exports
module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

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

    passport.use(new GoogleStrategy({
        clientID: googleAuth.clientID,
        clientSecret: googleAuth.clientSecret,
        callbackURL: googleAuth.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
    ));

};