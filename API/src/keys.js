module.exports = {
  database: {
    host: process.env.HOST || "localhost",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: "sign_to_all",
  },
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
};
