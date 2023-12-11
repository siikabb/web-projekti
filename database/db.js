import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'myusername',
  password: 'mypassword',
  database: 'for_mvc_task'
});

console.log('Connected to MariaDB!');

export default connection;
