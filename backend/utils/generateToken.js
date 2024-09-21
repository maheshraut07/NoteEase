const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = jwt.sign( {userId}, JWT_SECRET, {
        expiresIn: '30d',
    })
    return token;
}


module.exports = generateToken;