const routes = require('express').Router();
const AuthController = require('./app/controllers/AuthController');
const AuthMiddleware = require('./app/middlewares/auth');
const IsAdminMiddleware = require('./app/middlewares/admin');
const IsOwnMiddleware = require('./app/middlewares/own');
const CompaniesController = require('./app/controllers/CompaniesController');
const UsersController = require('./app/controllers/UsersController');
const ProfilesController = require('./app/controllers/ProfilesController');
const EmployeesController = require('./app/controllers/EmployeesController');

routes.post('/auth', AuthController.store);

routes.use(AuthMiddleware);

routes.get('/dashboard', (req, res) => {
    return res.json({ message: 'ok' });
});

routes.use('/companies', IsAdminMiddleware);

routes.get('/companies', CompaniesController.index);
routes.get('/companies/:id', CompaniesController.show);
routes.post('/companies', CompaniesController.store);
routes.put('/companies/:id', CompaniesController.update);
routes.delete('/companies/:id', CompaniesController.delete);

routes.get('/users', IsAdminMiddleware, UsersController.index);
routes.get('/users/:id', IsOwnMiddleware, UsersController.show);
routes.post('/users', IsAdminMiddleware, UsersController.store);
routes.put('/users/:id', IsOwnMiddleware, UsersController.update);
routes.delete('/users/:id', IsAdminMiddleware, UsersController.delete);

routes.use('/profiles', IsAdminMiddleware);

routes.get('/profiles', ProfilesController.index);
routes.get('/profiles/:id', ProfilesController.show);
routes.post('/profiles', ProfilesController.store);
routes.put('/profiles/:id', ProfilesController.update);
routes.delete('/profiles/:id', ProfilesController.delete);

routes.get('/employees', IsAdminMiddleware, EmployeesController.index);
routes.get('/employees/:id', IsOwnMiddleware, EmployeesController.show);
routes.post('/employees', IsAdminMiddleware, EmployeesController.store);
routes.put('/employees/:id', IsOwnMiddleware, EmployeesController.update);
routes.delete('/employees/:id', IsAdminMiddleware, EmployeesController.delete);

module.exports = routes;