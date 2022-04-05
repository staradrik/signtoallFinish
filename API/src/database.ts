import { createPool } from "mysql2/promise";

export const jwtSecret = process.env.JWT_SECRET || "somesecrettoken";

export async function connect() {
  const connection = await createPool({
    host: process.env.HOST || "localhost",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: "sign_to_all",
    connectionLimit: 10,
  });
  return connection;
}
