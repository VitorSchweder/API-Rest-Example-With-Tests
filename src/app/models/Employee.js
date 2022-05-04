const { Model, DataTypes } = require("sequelize");

class Employee extends Model {
	static init(sequelize) {
		super.init(
			{
				company_id: DataTypes.INTEGER,
				user_id: DataTypes.INTEGER,
			},
			{
				sequelize,
			}
		);
	}

	static associate(models) {
		this.belongsTo(models.Company, {
			foreignKey: "company_id",
			as: "company",
		});
		this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
	}
}

module.exports = Employee;
