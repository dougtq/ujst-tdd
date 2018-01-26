// const fetch = require('node-fetch')

const search = (q, type) =>
  global.fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
    .then(data => data)
    .catch(err => err.message)

const searchArtist = q => search(q, 'artist')

const searchAlbum = q => search(q, 'album')

const searchTrack = q => search(q, 'track')

const searchPlaylist = (q) => search(q, 'playlist')

export { search, searchArtist, searchAlbum, searchPlaylist, searchTrack }
