import { parseData } from "../services"

export const fetcher = async () => {
  return await parseData(await fetch('http://localhost:3005/data'))
  // return res
}

export const login = async (credentials) => {
  const res = await fetch('http://localhost:3005/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  const token = await res.json();
  return token;
}