const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const configAuth = require('../../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token not provided' })
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, configAuth.JWT_SECRET);
        req.userId = decoded.id;
    } catch (err) {
        return res.status(401).json({ message: 'Token invalid' })
    }

    return next();
};