export function creationDate(dateStr) {
  const date = new Date(dateStr)
  const dateArr = date.toString().split(' ')
  return {
    weekDay: dateArr[0],
    month: dateArr[1],
    monthDay: dateArr[2],
    year: dateArr[3],
    time: dateArr[4],
    GMT: dateArr[5],
    timeZone: `${dateArr[6]} ${dateArr[7]} ${dateArr[8]}`
  }
}

export function changeItemFormKeysToSnake(obj) {
  return {
    name: obj.name,
    desc: obj.desc,
    pounds: obj.pounds,
    cost: obj.cost,
    shop_id: obj.shopID,
    category: obj.category
  }
}