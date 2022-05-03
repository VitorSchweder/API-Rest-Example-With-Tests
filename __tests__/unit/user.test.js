const User = require('../../src/app/models/User');
const Profile = require('../../src/app/models/Profile');

const truncate = require('../utils/truncate');
const bcrypt = require('bcryptjs');

describe('User', () =>  {
    beforeEach(async () => {
        await truncate()
    });

    it('should create user and validate hash', async () => {
        const profile = await Profile.create({
            name: 'Test8',            
        });

        const user = await User.create({
            name: 'João',
            email: 'joao@test.com',
            profile_id: profile.id,
            password: '123456'
        });
    
        return expect(await bcrypt.compare('123456', user.password_hash)).toBe(true);
    });
});