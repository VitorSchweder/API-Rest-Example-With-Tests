const request = require("supertest");
const app = require("../../src/app");
const User = require("../../src/app/models/User");
const Profile = require("../../src/app/models/Profile");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should authenticated with valid credentials", async () => {
		const profile = await Profile.create({
			name: "Test1",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app).post("/auth").send({
			email: user.email,
			password: "123456",
		});

		return expect(response.status).toBe(200);
	});

	it("should not authenticated with invalid password", async () => {
		const profile = await Profile.create({
			name: "Test2",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app).post("/auth").send({
			email: user.email,
			password: "1234567",
		});

		return expect(response.status).toBe(401);
	});

	it("should not authenticated with invalid email", async () => {
		const profile = await Profile.create({
			name: "Test3",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app).post("/auth").send({
			email: "maria@test.com",
			password: "123456",
		});

		return expect(response.status).toBe(401);
	});

	it("should return jwt token when authenticated", async () => {
		const profile = await Profile.create({
			name: "Test4",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app).post("/auth").send({
			email: user.email,
			password: "123456",
		});

		return expect(response.body).toHaveProperty("token");
	});

	it("should be able to access private routes with token", async () => {
		const profile = await Profile.create({
			name: "Test5",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app)
			.get("/dashboard")
			.set("Authorization", `Bearer ${user.generateToken()}`);

		return expect(response.status).toBe(200);
	});

	it("should not be able to access private routes with wrong token", async () => {
		const profile = await Profile.create({
			name: "Test6",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app)
			.get("/companies")
			.set("Authorization", "Bearer 123");

		return expect(response.status).toBe(401);
	});

	it("should not be able to access private routes without token", async () => {
		const profile = await Profile.create({
			name: "Test7",
		});

		const user = await User.create({
			name: "João",
			email: "joao@test.com",
			profile_id: profile.id,
			password: "123456",
		});

		const response = await request(app).get("/companies");

		return expect(response.status).toBe(401);
	});
});
