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

    app.get('/page/:id', function(req, res, next) {
        console.log('entered page/id route');
        if (req.user) {
            res.render(req.params.id);
        }
        else {
            res.render('login');
        }
    });

    //route to render form views
    app.get('/register/:id', function(req, res, next){
        res.render('forms/form'+req.params.id);
    });

    //route to recieve post request to verify
    app.post('/register', function(req, res, next){
        console.log('Recieved post to /register: ', req.body);

        var obj = req.body;
        if (!obj.firstName){
            res.send('No First Name');
        }
        else if (!obj.lastName) {
            res.send('No Last Name');
        }
        else if (!obj.age){
            res.send('No Age');
        }
        else if (obj.age < 18){
            res.send('Age must be over 18');
        }
        else if (!obj.email){
            res.send('No Email');
        }
        else if (!obj.income){
            res.send('No Income');
        }
        else if (obj.income < 50000){
            res.send('Income must be greater than 50,000');
        }
        else if (!obj.address){
            res.send('No Address');
        }

        // res.send(req.body);
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