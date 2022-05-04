const Employee = require("../models/Employee");

class EmployeeService {
	constructor() {
		this.model = Employee;
	}

	async index() {
		const employees = await this.model.findAll({
			include: [
				{
					association: "company",
				},
				{
					association: "user",
				},
			],
		});

		return employees;
	}

	async getById(id) {
		return await this.model.findByPk(id);
	}

	async create(data) {
		return this.model.create(data);
	}

	async update(data, id) {
		const employee = await this.model.findByPk(id);

		if (!employee) {
			return false;
		}

		await this.model.update(data, { where: { id } });

		return await this.model.findByPk(id);
	}

	async destroy(id) {
		return await this.model.destroy({ where: { id } });
	}
}

module.exports = new EmployeeService();
