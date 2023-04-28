import mysql from 'mysql2';

//  create the connection to database
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  // database: 'blog'
});

connection.query(`CREATE DATABASE IF NOT EXISTS affiliatemarket`);
connection.query(`USE affiliatemarket`);
connection.query('CREATE TABLE IF NOT EXISTS deals (`id` INT NOT NULL AUTO_INCREMENT,`title` VARCHAR(45) NOT NULL,`status` VARCHAR(45) NOT NULL,`category` VARCHAR(45) NOT NULL,`description` VARCHAR(45) NOT NULL,`imagelink` VARCHAR(245) NOT NULL,`dimername` VARCHAR(45) NOT NULL,`created_time` DATETIME NOT NULL DEFAULT  CURRENT_TIMESTAMP,PRIMARY KEY (`id`))')

connection.connect((err) => {
  if (err) console.log(err);
  console.log('sql connected...');

})


