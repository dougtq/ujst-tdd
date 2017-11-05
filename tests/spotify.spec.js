import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import {
  search,
  searchAlbums,
  searchArtist,
  searchPlaylist,
  searchTracks
} from '../src/spotify/'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist
    })
    it('should exist the searchArtist method', () => {
      expect(searchArtist).to.exist
    })
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist
    })
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist
    })
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylist).to.exist
    })
  })

  describe('General Search', () => {
    let fetchedStub, promise, data

    beforeEach('Lidando com Stubs', () => {
      fetchedStub = sinon.stub(global, 'fetch')
      promise = fetchedStub.returnsPromise()
    })

    afterEach('Restaurando Stubs', () => {
      fetchedStub.restore()
    })

    it('should call fetch function', () => {
      search()
      expect(fetchedStub).to.been.calledOnce
    })
    context('Passing one type for search query', () => {
      it('should call fetch function with the correct url', () => {
        search('kanye', 'artist')
        expect(fetchedStub).to.been.calledWith(
          'https://api.spotify.com/v1/search?q=kanye&type=artist'
        )
      })
    })

    context('Passing more than one type for search query', () => {
      it('should call fetch function with the correct url', () => {
        search('kanye', ['artist', 'album'])
        expect(fetchedStub).to.been.calledWith(
          'https://api.spotify.com/v1/search?q=kanye&type=artist,album'
        )
      })
    })

    it('should return the JSON data from the promise', () => {
      promise.resolves({ body: 'json' })
      data = search('kanye', 'artist')
      expect(data.resolveValue).to.eql({ body: 'json' })
    })
  })
})
