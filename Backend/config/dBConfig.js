const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  database: 'Subhajeet Mohanty',
  user: 'postgres',
  password: '12345',
  port: 5432,
})

client.connect();

const dbConnect = ()=>{
   return client; 
}

module.exports = dbConnect;