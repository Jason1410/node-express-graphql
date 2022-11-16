const { addAuthor, updateAuthor, deleteAuthor } = require('./AuthorMutation');
const { createPost, updatePost, deletePost} = require('./PostMutation');
const { addTurn } = require('./TurnMutation');

module.exports = {
  addTurn,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  createPost,
  updatePost,
  deletePost
}