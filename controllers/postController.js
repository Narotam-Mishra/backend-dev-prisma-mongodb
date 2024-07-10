
const prisma = require('../prisma/index')

// create a new post
const createPost = async (req, res) => {
    try {
        const { slug, title, body, authorId } = req.body

        // use validation

        // create post
        const result = await prisma.post.create({
            data: {
                slug,
                title,
                body,
                author: { connect: {id: authorId }}
            }
        });
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

// update an existing post
const updatePost = async (req, res, next) => {
    const { id } = req.params
    const { title, body } = req.body

    try {
        const updatedRes = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: title,
                body: body
            }
        })
        res.json(updatedRes)
    } catch (error) {
        res.json({ error: `Post with ${id} does not existd` })
    }
}

// delete post
const deletePost = async (req, res) => {
    const { id } = req.params

    try {
        const deletedPost = await prisma.post.delete({
            where: { id: id}
        });
        res.json(deletedPost);
    } catch (error) {
        res.json({ error: `Post with ${id} does not existd` })
    }
}

// get all posts
const getAllPosts = async (req, res) => {
    try {
        const allPosts = await prisma.post.findMany()
        res.json(allPosts);
    } catch (error) {
        res.json({ error: `No post was found` })
    }
}

module.exports = {
    createPost, updatePost, deletePost, getAllPosts
}