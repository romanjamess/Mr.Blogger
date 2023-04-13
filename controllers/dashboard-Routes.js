const router = require("express").Router();
const { Post, Comment , User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth , async (req, res) => {
    try {
      const postData = await Post.findAll( {
          where: { user_id: req.session.user_id }
      },{
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const posts = postData.map((project) => project.get({ plain: true }));
  
      res.render('userpost', {
        posts,
        layout: "dashboard"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id)
      if (!postData) {
        res.status(404).json({message: 'Could not find that post'})
      }
  
      const post = postData.get({ plain: true });
  
      res.render('editPost', {
        layout: 'dashboard',
        post,
      });
    } catch (err) {
      res.redirect('/login')
    }
  })



  router.get("/newpost",  (req, res) => {
    res.render("createpost", {
        
        layout: "dashboard"
    })
  })

  module.exports = router;