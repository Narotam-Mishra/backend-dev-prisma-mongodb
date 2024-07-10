
const express = require('express')
const router = express.Router()
const { createPost, updatePost, deletePost, getAllPosts } = require('../controllers/postController')

const isLoggedIn = require('../middleware/isLoggedIn')

router.route('/post/create').post(isLoggedIn, createPost)

router.route('/post/update/:id').put(isLoggedIn, updatePost)

router.route('/post/delete/:id').delete(isLoggedIn, deletePost)

router.route('/post/getAllPosts').get(getAllPosts)


module.exports = router;