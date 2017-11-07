global.fetch = require('node-fetch')

import { searchArtist } from '../spotify/'

let data = searchArtist('Kanye')

data.then(value => {
  console.log(value)
})
