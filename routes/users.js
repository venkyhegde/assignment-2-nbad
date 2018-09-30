var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('users', { title: 'Hello User' });
// });
router.get('/hello', function(req, res, next) {
    res.render('item', { title: 'My Book' });
});

module.exports = router;
