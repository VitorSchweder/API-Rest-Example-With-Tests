const { Model, DataTypes } = require("sequelize");

class Company extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				cnpj: DataTypes.STRING,
				address: DataTypes.STRING,
				city: DataTypes.STRING,
				uf: DataTypes.STRING,
				phone: DataTypes.STRING,
				is_active: DataTypes.BOOLEAN,
			},
			{
				sequelize,
			}
		);
	}

	static associate(models) {
		this.hasMany(models.Employee, {
			foreignKey: "company_id",
			as: "employees",
		});
	}
}

module.exports = Company;
