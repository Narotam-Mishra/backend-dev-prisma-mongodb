
// bring in prisma model and cookie

const prisma = require('../prisma/index')

const cookieToken = require('../utils/cookieToken')


// user signup process
const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // check name, email and password exist
        if(!name || !email || !password){
            throw new Error('Please provide name, email & password fields correctly');
        }

        // create user
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })

        // send user a token
        cookieToken(user, res)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    signup
}