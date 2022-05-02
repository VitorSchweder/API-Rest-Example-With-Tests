module.exports = async (req, res, next) => {
    console.log(req.userId);
    console.log(req.userId);

    return res.status(401).json({ message: 'teste' })

    return next();
};