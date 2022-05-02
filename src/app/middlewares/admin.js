module.exports = async (req, res, next) => {
    console.log(req.userProfile);
    
    return res.status(401).json({ message: 'teste' })

    return next();
};