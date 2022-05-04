const config = require("../../config");

module.exports = async (req, res, next) => {
	if (req.userProfile != config.profiles.admin) {
		if (req.userId != req.params.id) {
			return res.status(401).json({ message: "Unauthorized" });
		}
	}

	return next();
};
