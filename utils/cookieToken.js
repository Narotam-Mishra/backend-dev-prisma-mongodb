const getJwtToken = require('./getJwtToken')


const cookieToken = (user, res) => {
    const token = getJwtToken(user.id);
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 100),
        httpOnly: true // now we can manipulate this cokkie only through server
    }
    user.password = undefined;
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = cookieToken;