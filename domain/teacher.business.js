const BaseBusiness = require('./base.business');
const { Teacher } = require('./models');

class TeacherBisiness extends BaseBusiness {
  constructor({ TeacherRepository }){
    super(TeacherRepository, Teacher);
  }
}

module.exports = TeacherBisiness;