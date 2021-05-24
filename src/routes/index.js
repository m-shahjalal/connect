const router = require('express').Router();
const userRouter = require('./user');

router.get('/', (_, res) => res.json({ message: 'Hello world!' }));
router.use('/users', userRouter);

module.exports = router;
