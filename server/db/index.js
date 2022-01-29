const secrets = require('../../secrets.js')
const { Pool } = require('pg')
const pool = new Pool({ ...secrets.db });

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

module.exports = {
  getUsers
}