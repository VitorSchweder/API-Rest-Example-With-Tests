const Company = require("../models/Company");

class CompanyService {
	constructor() {
		this.model = Company;
	}

	async index() {
		const companies = await this.model.findAll({
			include: [
				{
					association: "employees",
				},
			],
			where: {
				is_active: true,
			},
			order: [["name"]],
		});

		return companies;
	}

	async getById(id) {
		return await this.model.findByPk(id);
	}

	async create(data) {
		return this.model.create(data);
	}

	async update(data, id) {
		const company = await this.model.findByPk(id);

		if (!company) {
			return false;
		}

		await this.model.update(data, { where: { id } });

		return await this.model.findByPk(id);
	}

	async destroy(id) {
		return await this.model.destroy({ where: { id } });
	}
}

module.exports = new CompanyService();
