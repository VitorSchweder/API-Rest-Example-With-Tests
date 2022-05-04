"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("profiles", [
			{
				name: "Administrador",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: "Funcionário",
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("profiles", null, {});
	},
};
