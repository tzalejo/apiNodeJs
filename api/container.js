const { asClass, createContainer, asFunction, asValue } = require('awilix');
// App start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('./../config/environments');

// routes
const Routes = require('./../api/routes');
const StudentRoutes = require('./../api/routes/student.routes');
const TeacherRoutes = require('./../api/routes/teacher.routes');

// business
const { StudentBusiness, TeacherBusiness } = require('./../domain/');

// controllers
const { StudentController, TeacherController }  = require('./../api/controllers');

// services
const { StudentService, TeacherService } = require('./../services');

// respositories
const { StudentRepository, TeacherRepository }  = require('./../dal/repositories');

// config db
const db = require('./../dal/models');

const container = createContainer();
container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),

    StudentController: asClass(StudentController).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    TeacherController: asClass(TeacherController).singleton(),
    TeacherRoutes: asFunction(TeacherRoutes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton()
  })
  .register({
    TeacherRepository: asClass(TeacherRepository).singleton(),
    StudentRepository: asClass(StudentRepository).singleton()
  })
  .register({
    StudentBusiness: asClass(StudentBusiness).singleton(),
    TeacherBusiness: asClass(TeacherBusiness).singleton()
  });

module.exports = container;
