const CompanyService = require("../services/CompanyService");

class CompaniesController {
	async index(req, res) {
		try {
			const result = await CompanyService.index();

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
			const result = await CompanyService.getById(req.params.id);

			if (!result) {
				return res.status(404).json({
					success: false,
					message: "Empresa não encontrada!",
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
			const result = await CompanyService.create(req.body);

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
			const result = await CompanyService.update(req.body, req.params.id);

			if (!result) {
				return res.status(404).json({
					success: false,
					message: "Empresa não encontrada!",
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
			const result = await CompanyService.destroy(req.params.id);

			if (!result) {
				return res.status(404).json({
					success: false,
					message: "Empresa não encontrada!",
				});
			}

			return res.status(200).json({
				success: true,
				message: "Empresa excluída com sucesso.",
			});
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}
}

module.exports = new CompaniesController();
