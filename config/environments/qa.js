module.exports = {
  PORT: process.env.PORT,
  DB: {
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'school_QA',
    host: 'localhost',
    dialect: 'postgres'
  }
}