
const prisma = require('../prisma/index')

// create a new post
const createPost = async (req, res) => {
    try {
        const { slug, title, body, authorId } = req.body

        // use validation

        // create post
        prisma.post.create({
            data: {
                slug,
                title,
                body,
                author: { connect: {id: authorId }}
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createPost
}