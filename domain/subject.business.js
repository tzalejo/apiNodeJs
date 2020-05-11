const BaseBusiness = require('./base.business');
const { Subject } = require('./models');
class SubjectBisiness extends BaseBusiness {
  
  constructor({ SubjectRepository }){
    super(SubjectRepository, Subject);
  }
}

module.exports = SubjectBisiness;