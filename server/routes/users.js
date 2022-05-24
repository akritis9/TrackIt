const router = require('express').Router();
let User = require('../models/user.model');

/* first endpoint */
/* call users.find() to get a list of all the users from the database */
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* second endpoint */
/* handles incoming HTTP POST requests on the /users/add/ URL path */
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save().then(() => res.json('User added!')).catch(err => res.status(4000).json('Error: ' + err));
});

module.exports = router;