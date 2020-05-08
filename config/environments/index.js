require('dotenv').config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const qa =  require('./qa');

// La variable en que se encutra nuestro software, la conf el SO.
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === 'production') {
  currentEnv = PRODUCTION;
}else if(NODE_ENV === 'qa') {
  currentEnv = QA;
}

module.exports = currentEnv;