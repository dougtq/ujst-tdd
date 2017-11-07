import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import {
  search,
  searchAlbum,
  searchArtist,
  searchPlaylist,
  searchTrack
} from '../src/spotify/'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  let fetchedStub, promise, data

  beforeEach('Lidando com Stubs', () => {
    fetchedStub = sinon.stub(global, 'fetch')
    promise = fetchedStub.returnsPromise()
  })

  afterEach('Restaurando Stubs', () => {
    fetchedStub.restore()
  })
  describe('Smoke Tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist
    })
    it('should exist the searchArtist method', () => {
      expect(searchArtist).to.exist
    })
    it('should exist the searchTracks method', () => {
      expect(searchTrack).to.exist
    })
    it('should exist the searchAlbums method', () => {
      expect(searchAlbum).to.exist
    })
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylist).to.exist
    })
  })

  describe('General Search', () => {
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

  describe('Search Artist', () => {
    it('should call fetch funtion', () => {
      searchArtist('Kanye')
      expect(fetchedStub).to.been.calledOnce
    })

    it('should call fetch funtion with the correct url', () => {
      searchArtist('Kanye')
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/search?q=Kanye&type=artist'
      )
    })
  })

  describe('Search Album', () => {
    it('should call fetch funtion', () => {
      searchAlbum('Yeezus')
      expect(fetchedStub).to.been.calledOnce
    })

    it('should call fetch funtion with the correct url', () => {
      searchAlbum('Yeezus')
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/search?q=Yeezus&type=album'
      )
    })
  })

  describe('Search Track', () => {
    it('should call fetch funtion', () => {
      searchTrack('Karaoke')
      expect(fetchedStub).to.been.calledOnce
    })

    it('should call fetch funtion with the correct url', () => {
      searchTrack('Karaoke')
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/search?q=Karaoke&type=track'
      )
    })
  })

  describe('Search Playlist', () => {
    it('should call fetch funtion', () => {
      searchPlaylist('Drake')
      expect(fetchedStub).to.been.calledOnce
    })

    it('should call fetch funtion with the correct url', () => {
      searchPlaylist('Drake')
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/search?q=Drake&type=playlist'
      )
    })
  })
})
