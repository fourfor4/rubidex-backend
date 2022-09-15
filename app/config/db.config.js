module.exports = {
  HOST: "db-mysql-nyc1-89275-do-user-7470291-0.a.db.ondigitalocean.com",
  PORT: 25060,
  USER: "paul",
  PASSWORD: "AVNS_dFij35k2fGEaxv_oBFF",
  DB: "addresses",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
