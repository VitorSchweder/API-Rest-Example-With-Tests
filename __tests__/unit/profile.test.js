const Profile = require("../../src/app/models/Profile");
const truncate = require("../utils/truncate");

describe("Profile", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should create profile", async () => {
		const profile = await Profile.create({
			name: "Novo Perfil",
		});

		return expect(profile.created_at).not.toBeNull();
	});
});
