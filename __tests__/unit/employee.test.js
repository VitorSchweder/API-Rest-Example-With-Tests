const Employee = require("../../src/app/models/Employee");
const User = require("../../src/app/models/User");
const Profile = require("../../src/app/models/Profile");
const Company = require("../../src/app/models/Company");
const truncate = require("../utils/truncate");

describe("Employee", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should create employee", async () => {
		const company = await Company.create({
			name: "Empresa teste",
			cnpj: "33915790000197",
			address: "Rua teste, 1760",
			city: "Rio do Sul",
			uf: "SC",
			phone: "(47) 99999-9999",
			is_active: true,
		});

		const profile = await Profile.create({
			name: "Novo perfil teste",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
			is_active: true,
		});

		const employee = await Employee.create({
			company_id: company.id,
			user_id: user.id,
		});

		return expect(employee.created_at).not.toBeNull();
	});
});
