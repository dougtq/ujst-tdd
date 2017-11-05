let search = (q, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
    .then(data => {
      return data
    })
    .catch(err => {
      console.log(err)
    })

export { search }
