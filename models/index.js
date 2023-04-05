const User = require("./User")
const Comment = require("./comment")
const Post = require("./post")

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Post.hasMany(Comment, {
    foreignKey: "post_id"
  });

  Comment.belongsTo(Post, {
    foreignKey: "post_id"
  });

  Comment.belongsTo(User, {
    foreignKey: "user_id"
  });

  User.hasMany(Comment, {
    foreignKey: "user_id"
  });
  
  module.exports = { User, Comment, Post  };
  
