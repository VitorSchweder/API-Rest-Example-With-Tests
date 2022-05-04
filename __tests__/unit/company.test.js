const Company = require("../../src/app/models/Company");
const truncate = require("../utils/truncate");

describe("Company", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should create actived company", async () => {
		const company = await Company.create({
			name: "Empresa teste",
			cnpj: "33915790000197",
			address: "Rua teste, 1760",
			city: "Rio do Sul",
			uf: "SC",
			phone: "(47) 99999-9999",
			is_active: true,
		});

		return expect(company.is_active).toBeTruthy();
	});
});
