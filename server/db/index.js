const secrets = require('../../secrets.js')
const { Pool } = require('pg');
const res = require('express/lib/response');
const pool = new Pool({ ...secrets.db });

const findTargetEmail = async (email) => {
  try {
    const text = 'SELECT id FROM users WHERE email = $1'
    return (await pool.query(text, [email])).rows
  } catch (err) {
    console.log(err.stack);
  }
  return res.rows
}

const createUser = async (email, hashedPassword) => {
  const text = 'INSERT INTO users (email, password) VALUES($1, $2) RETURNING *'
  const values = [email, hashedPassword]
  try {
    const res = await pool.query(text, values);
    return res.rows
  } catch (err) {
    console.log(err.stack)
  }
}

const findUser = async (email, hash) => {
  const text = 'SELECT user FROM users (email, password) VALUES($1, $2) RETURNING *'
  const values = [email, hash]
  try {
    const res = await pool.query(text, values)
    return res.rows
  } catch (err) {
    console.log('err.stack', err.stack);
  }
}


module.exports = {
  findTargetEmail,
  createUser,
  findUser
}