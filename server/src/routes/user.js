const router = require('express').Router();
const controller = require('../controller/user');

const { loginPost, loginGet, registerGet, registerPost, getUsers } = controller;

router.get('/', getUsers);

router.post('/login', loginPost);
router.get('/login', loginGet);

router.post('/register', registerPost);
router.get('/signup', registerGet);

module.exports = router;
