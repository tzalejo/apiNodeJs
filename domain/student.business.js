const BaseBusiness = require('./base.business');
const { Student } = require('./models');
class StudentBisiness extends BaseBusiness {
  
  constructor({ StudentRepository }){
    super(StudentRepository, Student);
  }
}

module.exports = StudentBisiness;