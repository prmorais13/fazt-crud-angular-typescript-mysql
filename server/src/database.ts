import mysql from 'promise-mysql';

import keys from './keys';
import { createPool } from 'mysql';

const pool = mysql.createPool(keys.database);

pool.getConnection().then(connection => {
  pool.releaseConnection(connection);
  console.log('DB está conectado!');
});

export default pool;
