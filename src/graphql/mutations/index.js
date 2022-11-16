const { addAuthor, updateAuthor, deleteAuthor } = require('./AuthorMutation');
const { createPost, updatePost, deletePost} = require('./PostMutation')

module.exports = {
  addAuthor,
  updateAuthor,
  deleteAuthor,
  createPost,
  updatePost,
  deletePost
}