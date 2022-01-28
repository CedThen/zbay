export const fetcher = async (setData) => {
  const d = await fetch('http://localhost:3005/data')
  // let e = JSON.parse(await d.json());

  setData(JSON.parse(await d.json()))

}