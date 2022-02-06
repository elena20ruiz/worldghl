const fs = require('fs')


const readCSVToJSON = (path, keysToMap = [], delimiter = ',') => {
  try {
    const data = fs.readFileSync(path, 'utf8')
    const lines = data.split(/\r?\n/)
    const keys = lines[0].split(delimiter)

    let MAPPING = {}
    for (var i = 0; i < keys.length; ++i) {
      MAPPING[keys[i]] = i
    }

    let rows = []
    for (var i = 1; i < lines.length; ++i) {
      const values = lines[i].split(delimiter)
      let item = {}
      for (var j = 0; j < keysToMap.length; ++j) {
        const key = keysToMap[j]
        const index = MAPPING[key]
        if (index !== undefined) item[key] = values[index]  
      }
      rows.push(item)
    }
    return {
      data: rows
    }
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

const parseCountriesData = (population_data) => {
  population_data.data.map((el) => {
    el['value'] =  el['Population'].replace(/ /g, '')
    el['title'] = el['Country']
    delete el['Population']
    delete el['Country']
    return el
  })
  return population_data
}

const parseCitiesData = (population_data) => {
  population_data.data.map((el) => {
    el['value'] =  el['Population'].replace(/ /g, '')
    el['title'] = el['Capital City']
    delete el['Population']
    delete el['Capital City']
    return el
  })
  return population_data
}


const run = () => {
  const POPULATION_COUNTRY_PATH = '../data/population-country.csv'
  const POPULATION_COUNTRY_KEYS = ['Country', 'Population']
  let population_countries = readCSVToJSON(POPULATION_COUNTRY_PATH, POPULATION_COUNTRY_KEYS, ',')
  population_countries = parseCountriesData(population_countries)
  saveJSONFile('../data/population-country-final.json', population_countries)
  
  const POPULATION_CAPITAL_PATH = '../data/population-cities.csv'
  const POPULATION_CAPITAL_KEYS = ['Capital City', 'City code', 'Population']
  let population_cities = readCSVToJSON(POPULATION_CAPITAL_PATH, POPULATION_CAPITAL_KEYS, ';')
  population_cities = parseCitiesData(population_cities)
  saveJSONFile('../data/population-cities-final.json', population_cities)
}

run()
