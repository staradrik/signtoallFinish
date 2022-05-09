module.exports = {
  database: {
    host: process.env.HOST || "mysql-signtoall.alwaysdata.net",
    user: process.env.USER || "signtoall_user",
    password: process.env.PASSWORD || "$L5Z]ESAkp5Fc1q|",
    database: "signtoall_databases",
  },
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
};
