export const fetcher = async (setData) => {
  const d = await fetch('http://localhost:3005/data')
  setData(JSON.parse(d))
}