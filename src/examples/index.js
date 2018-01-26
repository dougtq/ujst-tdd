import { searchArtist } from '../spotify/'
global.fetch = require('node-fetch')

let data = searchArtist('Kanye')

data.then(value => {
  console.log(value)
})
