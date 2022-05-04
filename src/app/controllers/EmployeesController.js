const EmployeeService = require("../services/EmployeeService");

class EmployeesController {
	async index(req, res) {
		try {
			const result = await EmployeeService.index();

			return res.json(result);
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}

	async show(req, res) {
		try {
			const result = await EmployeeService.getById(req.params.id);

			if (!result) {
				return res.status(404).json({
					success: false,
					message: "Funcionário não encontrado!",
				});
			}

			return res.json(result);
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}

	async store(req, res) {
		try {
			const result = await EmployeeService.create(req.body);

			return res.json(result);
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}

	async update(req, res) {
		try {
			const result = await EmployeeService.update(
				req.body,
				req.params.id
			);

			if (!result) {
				return res.status(404).json({
					success: false,
					message: "Funcionário não encontrado!",
				});
			}

			return res.json(result);
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}

	async delete(req, res) {
		try {
			const result = await EmployeeService.destroy(req.params.id);

			if (!result) {
				return res.status(404).json({
					success: false,
					message: "Funcionário não encontrado!",
				});
			}

			return res.status(200).json({
				success: true,
				message: "Funcionário excluído com sucesso.",
			});
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}
}

module.exports = new EmployeesController();
