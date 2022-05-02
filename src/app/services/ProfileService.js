const Profile = require('../models/Profile');

class ProfileService {
    constructor() {
        this.model = Profile;
    }

    async index () {
        const profiles = await this.model.findAll({                       
            order: [["name"]]
        });

        return profiles;
    }

    async getById(id) {
        return await this.model.findByPk(id);
    }

    async create (data) {
        return this.model.create(data);
    }

    async update (data, id) {
        const profile = await this.model.findByPk(id);
        
        if (!profile) {
            return false;
        }

        await this.model.update(data, { where: { id } });

        return await this.model.findByPk(id);
    }

    async destroy(id) {
        return await this.model.destroy({ where: { id } });
    }
}

module.exports = new ProfileService;