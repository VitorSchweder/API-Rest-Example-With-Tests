const config = require("../../config");

module.exports = async (req, res, next) => {
	if (req.userProfile !== config.profiles.admin) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	return next();
};
