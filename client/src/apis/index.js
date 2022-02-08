import { parseData } from "../services"

export const fetcher = async () => {
  return await parseData(await fetch('http://localhost:3005/api/data'))
}

export const login = async (credentials) => {
  try {
    const res = await fetch('http://localhost:3005/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    return await res.json();
  } catch (err) {
    return err
  }
}

export const register = async (credentials) => {
  try {
    const res = await fetch('http://localhost:3005/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    return await res.json();
  } catch (err) {
    return err
  }
}

export const updateCartDb = async (token, cart) => {
  try {
    const res = await fetch('http://localhost:3005/api/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, cart })
    })
    return await res.json();
  } catch (err) {
    return err
  }
}