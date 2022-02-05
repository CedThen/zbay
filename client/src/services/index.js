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

export function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}