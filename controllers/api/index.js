const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-Routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
