const BaseBusiness = require('./base.business');
const { Section } = require('./models');
class SectionBisiness extends BaseBusiness {
  
  constructor({ SectionRepository }){
    super(SectionRepository, Section);
  }
}

module.exports = SectionBisiness;