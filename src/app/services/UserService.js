const User = require("../models/User");

class UserService {
	constructor() {
		this.model = User;
	}

	async index() {
		const users = await this.model.findAll({
			include: [
				{
					association: "profile",
				},
			],
			where: {
				is_active: true,
			},
			order: [["name"]],
		});

		return users;
	}

	async getById(id) {
		return await this.model.findByPk(id);
	}

	async create(data) {
		return this.model.create(data);
	}

	async update(data, id) {
		const user = await this.model.findByPk(id);

		if (!user) {
			return false;
		}

		await this.model.update(data, { where: { id } });

		return await this.model.findByPk(id);
	}

	async destroy(id) {
		return await this.model.destroy({ where: { id } });
	}
}

module.exports = new UserService();
