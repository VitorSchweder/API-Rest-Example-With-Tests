const routes = require('express').Router();
const AuthController = require('./app/controllers/AuthController');
const AuthMiddleware = require('./app/middlewares/auth');
const CompaniesController = require('./app/controllers/CompaniesController');
const UsersController = require('./app/controllers/UsersController');
const ProfilesController = require('./app/controllers/ProfilesController');
const EmployeesController = require('./app/controllers/EmployeesController');

routes.post('/auth', AuthController.store);

routes.use(AuthMiddleware);

routes.get('/companies', CompaniesController.index);
routes.get('/companies/:id', CompaniesController.show);
routes.post('/companies', CompaniesController.store);
routes.put('/companies/:id', CompaniesController.update);
routes.delete('/companies/:id', CompaniesController.delete);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.store);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete);

routes.get('/profiles', ProfilesController.index);
routes.get('/profiles/:id', ProfilesController.show);
routes.post('/profiles', ProfilesController.store);
routes.put('/profiles/:id', ProfilesController.update);
routes.delete('/profiles/:id', ProfilesController.delete);

routes.get('/employees', EmployeesController.index);
routes.get('/employees/:id', EmployeesController.show);
routes.post('/employees', EmployeesController.store);
routes.put('/employees/:id', EmployeesController.update);
routes.delete('/employees/:id', EmployeesController.delete);

module.exports = routes;