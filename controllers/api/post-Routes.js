const router = require("express").Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log( req.body)
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res)=> {
  try{
    // console.log(postData)
    const postData = await Post.update(req.body, {id: req.params.id});
   
     res.status(200).json(postData); 
  } catch(err){
   res.status(400).json(err)
  }
});


module.exports = router