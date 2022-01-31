import { parseData } from "../services"

export const fetcher = async () => {
  const d = await parseData(await fetch('http://localhost:3005/data'))
  return d
}