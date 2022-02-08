const PATH = 'data.json'
import fs from 'fs'

const readCountryData = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    console.error(err)
  }
}
const saveJSONFile = (path, value) => {
  fs.writeFileSync(path, JSON.stringify(value), (err) => {
    if (err) console.error(err)
    else {
      console.log("JSON data is saved.")
    }
  })
}

const data = readCountryData(PATH)
const mapping = data.data.reduce((acc, el) => {
  acc[el.title] = {
    background: el.background
  }
  return acc
}, {})

saveJSONFile('../data/background-countries.json', { data: mapping })