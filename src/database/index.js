const Sequelize = require("sequelize");
const dbConfig = require("../config");

const User = require("../app/models/User");
const Company = require("../app/models/Company");
const Profile = require("../app/models/Profile");
const Employee = require("../app/models/Employee");

const connection = new Sequelize(dbConfig.database);

User.init(connection);
Company.init(connection);
Profile.init(connection);
Employee.init(connection);

User.associate(connection.models);
Company.associate(connection.models);
Profile.associate(connection.models);
Employee.associate(connection.models);

module.exports = connection;
