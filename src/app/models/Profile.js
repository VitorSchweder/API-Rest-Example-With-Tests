const { Model, DataTypes } = require('sequelize');

class Profile extends Model {
    static init(sequelize) {
        super.init({    
            name: DataTypes.STRING       
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'profile_id', as: 'users' });
    }
}

module.exports = Profile;
