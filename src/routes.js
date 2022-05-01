const routes = require('express').Router();
const AuthController = require('./app/controllers/AuthController');
const AuthMiddleware = require('./app/middlewares/auth');
const CompaniesController = require('./app/controllers/CompaniesController');

routes.post('/auth', AuthController.store);

routes.use(AuthMiddleware);

routes.get('/companies', CompaniesController.index);
routes.post('/companies', CompaniesController.store);
routes.put('/companies/:id', CompaniesController.update);
routes.delete('/companies/:id', CompaniesController.delete);

module.exports = routes;