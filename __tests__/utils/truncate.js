const { sequelize } = require("../../src/app/models");

module.exports = () => {
	return sequelize.sync({ force: true });
};
