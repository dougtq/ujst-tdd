let search = (q, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
    .then(data => data)
    .catch(err => err.message)

let searchArtist = q => search(q, 'artist')

let searchAlbum = q => search(q, 'album')

let searchTrack = q => search(q, 'track')

let searchPlaylist = (q) => search(q, 'playlist')

export { search, searchArtist, searchAlbum, searchPlaylist, searchTrack }
