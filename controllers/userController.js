
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
        if (error.code === 'P2002' && error.meta && error.meta.target.includes('email')) {
            // Handle unique constraint violation
            return res.status(400).json({
                message: 'Email already exists. Please use a different email.'
            });
        }
        next(error);  // Pass other errors to the error handler
    }
}

// login user
const login = async (req, res) => {
    try {
        // take info from user
        const { email, password } = req.body;

        if(!email || !password){
            throw new Error('Please provide email and password fields correctly');
        }

        // find a user based on email
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        // when there is no user
        if(!user){
            throw new Error('User not found!!');
        }

        // password mismatch
        if(user.password !== password){
            throw new Error('password is incorrect!!');
        }

        // user exist and it is validated
        cookieToken(user, res)
    } catch (error) {
        throw new Error(error)
    }
}

// logout user
const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.json({
            success: true
        })
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    signup, login, logout
}