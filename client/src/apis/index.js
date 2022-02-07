import { parseData } from "../services"

export const fetcher = async () => {
  return await parseData(await fetch('http://localhost:3005/data'))
}

export const login = async (credentials) => {
  const res = await fetch('http://localhost:3005/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  // const token = await res.json();
  // return token;
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
    const d = await res.json();
    console.log('res', res);
    console.log('d', d);
  } catch (err) {
    console.log('errrr', err);

  }
  // const token = await res.json();
  // return token;
}