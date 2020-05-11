const BaseBusiness = require('./base.business');
const { Registration } = require('./models');
class RegistrationBisiness extends BaseBusiness {
  
  constructor({ RegistrationRepository }){
    super(RegistrationRepository, Registration);
  }
}

module.exports = RegistrationBisiness;