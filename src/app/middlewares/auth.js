const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const configAuth = require("../../config");

module.exports = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: "Token not provided" });
	}

	const [, token] = authHeader.split(" ");

	try {
		const decoded = await promisify(jwt.verify)(token, configAuth.token);
		req.userId = parseInt(decoded.id);
		req.userProfile = parseInt(decoded.profile_id);
	} catch (err) {
		return res.status(401).json({ message: "Invalid token" });
	}

	return next();
};
