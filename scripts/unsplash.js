import fetch from 'node-fetch'
import fs from 'fs'

const CLIENT_KEY = '4vGDu__t07CqRdLOukUNNULNE6kG250ZfWUdkP41VLE'

const getUnSplashImage = async (text) => {

  const params = new URLSearchParams()
  params.append('query', text)
  params.append('per_page', 1)

  const response = await fetch('https://api.unsplash.com/search/photos?' + params.toString(), {
    method: 'GET',
    headers: {
      'Authorization':  'Client-ID ' + CLIENT_KEY,
      'Access-Control-Allow-Origin': '*'
    }
  })
  if (response.ok) {
    const body = await response.json()
    const result = body.results[0]
    return {
      url: result.urls.regular,
      user: result.user
    }
  }
  return {}
}


const readListOfCountries = (path, index = 0, delimiter = ',') => {
  try {
    const data = fs.readFileSync(path, 'utf8')
    const lines = data.split(/\r?\n/)

    let rows = []
    for (var i = 1; i < lines.length; ++i) {
      const values = lines[i].split(delimiter)
      rows.push(values[index])
    }
    return rows
  } catch (err) {
    console.error(err)
  }
}

const runImages = async (list) => {
  let data = []
  for (var i = 0; i < list.length; ++i) {
    const name = list[i]
    const background = await getUnSplashImage(name).catch((err) => console.error(err))
    data.push({
      title: name,
      background
    })
  }
  return data
}

const saveJSONFile = (path, value) => {
  fs.writeFileSync(path, JSON.stringify(value), (err) => {
    if (err) console.error(err)
    else {
      console.log("JSON data is saved.")
    }
  })
}


const run = async () => {
  const POPULATION_COUNTRY_PATH = '../data/population-country.csv'
  const countryList = readListOfCountries(POPULATION_COUNTRY_PATH)
  let data = await runImages(countryList)
  saveJSONFile('data.json', { data })
}
run()