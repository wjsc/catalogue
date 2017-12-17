const SERVER = 'http://localhost:3001/';
const ARTIST_API = SERVER + 'artist/';
const ALBUM_API = SERVER + 'album/';
const TRACK_API = SERVER + 'track/';
const FAVORITE_API = SERVER + 'favorite/';

export const defaultHeaders={ 'Accept': 'application/json', 'Content-Type': 'application/json' };
export const options={ method:'GET', headers: defaultHeaders};
const resjson = res => res.json();

export const fetchArtists = () => fetch(ARTIST_API, options).then(resjson);
export const fetchAlbums = () => fetch(ALBUM_API, options).then(resjson);
export const fetchTracks = () => fetch(TRACK_API, options).then(resjson);

export const fetchArtist = (artist) => fetch(ARTIST_API+artist, options).then(resjson);
export const fetchAlbum = (album) => fetch(ALBUM_API+album, options).then(resjson);
export const fetchTrack = (track) => fetch(TRACK_API+track, options).then(resjson);

export const fetchAlbumsByArtist = (artist) => fetch(ALBUM_API+'artist/'+artist, options).then(resjson);
export const fetchTracksByArtist = (artist) => fetch(TRACK_API+'artist/'+artist, options).then(resjson);
export const fetchTracksByAlbum = (album) => fetch(TRACK_API+'album/'+album, options).then(resjson);

export const searchArtists = (keyword) => fetch(ARTIST_API+'search/'+keyword, options).then(resjson);
export const searchAlbums = (keyword) => fetch(ALBUM_API+'search/'+keyword, options).then(resjson);
export const searchTracks = (keyword) => fetch(TRACK_API+'search/'+keyword, options).then(resjson);

export const fetchFavorites = (user) => fetch(FAVORITE_API+'user/'+user, options).then(resjson);

export const insertFavorite = (user, track) => fetch(FAVORITE_API+'',{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify({ user, track })
    })

export const removeFavorite = (user, track) => fetch(FAVORITE_API+'',{
        method: 'DEL',
        headers: defaultHeaders,
        body: { user, track }
    })