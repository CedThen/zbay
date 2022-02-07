const secrets = require('../../secrets.js')
const { Pool } = require('pg');
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

const getUser = (email) => {

  return new Promise(function (resolve, reject) {
    pool.query(`SELECT id FROM users WHERE email = '${email}'`, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const createUser = async (email, hashedPassword) => {
  const text = 'INSERT INTO users (email, password) VALUES($1, $2) RETURNING *'
  const values = [email, hashedPassword]
  try {
    const res = await pool.query(text, values);
    console.log(res)
  } catch (err) {
    console.log(err.stack)
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser
}