import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Kamp123QQ%%123',
  database: process.env.DB_NAME || 'bddesarollosoft',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000, // 60 sec
  queueLimit: 1,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});