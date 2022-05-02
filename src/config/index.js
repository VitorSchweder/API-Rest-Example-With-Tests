require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
  
module.exports = {
    database: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT || 'postgres',
        logging: false,
        storage: './__tests__/database.sqlite',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true
        }
    },
    token: process.env.JWT_SECRET || 'Kgegn3XHYgvaFh-fx8NboLzgQwGJUQA',
    salt: process.env.SALT_ROUNDS
}