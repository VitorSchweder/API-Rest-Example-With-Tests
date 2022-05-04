const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const configAuth = require("../../config");
const { Model, DataTypes } = require("sequelize");

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				email: DataTypes.STRING,
				profile_id: DataTypes.INTEGER,
				is_active: DataTypes.BOOLEAN,
				password: DataTypes.VIRTUAL,
				password_hash: DataTypes.STRING,
			},
			{
				sequelize,
			}
		);

		this.addHook("beforeSave", async (user) => {
			if (user.password) {
				user.password_hash = await bcrypt.hash(
					user.password,
					parseInt(configAuth.salt)
				);
			}
		});

		return this;
	}

	static associate(models) {
		this.belongsTo(models.Profile, {
			foreignKey: "profile_id",
			as: "profile",
		});
		this.hasMany(models.Employee, {
			foreignKey: "user_id",
			as: "employees",
		});
	}

	checkPassword = (password) => {
		return bcrypt.compare(password, this.password_hash);
	};

	generateToken = () => {
		return jwt.sign(
			{
				id: this.id,
				profile_id: this.profile_id,
			},
			configAuth.token
		);
	};
}

module.exports = User;
