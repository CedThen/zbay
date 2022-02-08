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
  const text = 'INSERT INTO users (email, password) VALUES($1, $2) RETURNING id, email, cart'
  const values = [email, hashedPassword]
  try {
    return (await pool.query(text, values)).rows[0]
  } catch (err) {
    console.log(err.stack)
  }
}

const findUser = async (email) => {
  const text = 'SELECT * FROM users WHERE email = $1'
  const values = [email]
  try {
    const res = await pool.query(text, values)
    return res.rows[0]
  } catch (err) {
    console.log('err.stack', err.stack);
  }
}

const retrieveOrders = async (id) => {
  const text = 'SELECT * from orders WHERE userId = $1'
  const values = [id]
  try {
    const res = await pool.query(text, values);
    return res.rows
  } catch (err) {
    console.log(err.stack)
  }
}




module.exports = {
  findTargetEmail,
  createUser,
  findUser,
  retrieveOrders
}

// [{"id":"1","price":"109.95"},{"id":"2", "price":"22.3"} ]