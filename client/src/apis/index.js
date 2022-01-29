export const fetcher = async (setData) => {
  const d = await fetch('http://localhost:3005/data')
  setData(JSON.parse(await d.json()))
}

export const testUser = async () => {
  const users = await fetch('http://localhost:3005/users')
  console.log('users', await users.json())
}