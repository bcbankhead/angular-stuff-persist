require('dotenv').load();
var db = require('monk')(process.env.MONGOLAB_URI)
var Post = db.get('posts')

module.exports = {

  getPosts: function () {
    return Post.find({})
  }

}
