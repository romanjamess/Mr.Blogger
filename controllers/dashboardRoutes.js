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
            attributes: ['name'],
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


  router.get("/newpost",  (req, res) => {
    res.render("createpost", {
        
        layout: "dashboard"
    })
  })

  module.exports = router;