export function categorize(data) {
  if (!data) return;
  let categories = {};
  data.forEach((item) => {
    let category = item.category;
    if (categories[category]) categories[category] = [...categories[category], item]
    else categories[category] = [item]
  })
  return categories
}

export async function parseData(data) {
  let res = JSON.parse(await data.json())
  return await res;
}