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

export function changeCamelKeysToSnake(obj) {
  const snakeCase = {}
  for (const [key, value] of Object.entries(obj)) {
    const keyToSnake = key.split(/(?=[A-Z])/).join('_').toLowerCase();
    snakeCase[keyToSnake] = value
  }
  return snakeCase
}

export function changeSnakeKeysToCamel(obj) {
  const camelCase = {}
  for (const [key, value] of Object.entries(obj)) {
    const keyToCamel = key.split('_').map((word, index) => {
      if (index === 0) return word
      else return word[0].toUpperCase() + word.slice(1)
    }).join('')
    camelCase[keyToCamel] = value
  }
  return camelCase
}

export function emptyItemFormFields() {
  return {
    name: '',
    shopId: '',
    cost: '',
    category: '',
    desc: '',
    pounds: ''
  }
}