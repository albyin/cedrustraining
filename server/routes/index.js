//old version
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// /* GET any other page. */
// router.get('/page/:id', function(req, res, next) {
//   res.render(req.params.id);
// });

// module.exports = router;

//new version
module.exports = function(app, passport) {

    // app.get('/', function(req, res) {
    //     res.render('index'); 
    // });

	app.get('/page/:id', function(req, res, next) {
        console.log('entered page/id route');
        if (req.user) {
            res.render(req.params.id);
        }
        else {
            res.render('login');
        }
	});

    app.get('/auth/google',
      passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

    app.get('/auth/google/callback', 
      passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

    // process the login form
    app.post('/authenticate', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/authUserInfo', function(req, res, next){
        res.send(req.user);
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};