const { asClass, createContainer, asFunction, asValue } = require('awilix');
const StartUp = require('./startup');
const Server = require('./server');
const UserController  = require('./../api/controllers/user.controller');
const Routes = require('./../api/routes');
const container = createContainer();
const config = require('./../config/environments');
const UserRoutes = require('./../api/routes/user.routes');

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    UserController: asClass(UserController).singleton()
  })
  .register({
    router: asFunction(Routes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton()
  });

module.exports = container;
