const SERVER = 'http://localhost:3001/';
export const CDN_URL='http://localhost:3002/';
const ARTIST_API = SERVER + 'artist/';
const ALBUM_API = SERVER + 'album/';
const TRACK_API = SERVER + 'track/';
const FAVORITE_API = SERVER + 'favorite/';

const resjson = res => res.json();
const queryString = obj => obj ? '?' + Object.keys(obj).reduce((a,k) => {a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&') : '';

const defaultHeaders={ 'Accept': 'application/json', 'Content-Type': 'application/json' };
const options={ method:'GET', headers: defaultHeaders};

const get = (endpoint, params) => fetch(endpoint + queryString(params), {method: 'GET', options: options, headers: defaultHeaders}).then(resjson);
const post = (endpoint, body) => fetch(endpoint, {method: 'POST', options: options, headers: defaultHeaders, body: JSON.stringify(body)}).then(resjson);

export const fetchArtists = () => get(ARTIST_API);
export const fetchAlbums = () => get(ALBUM_API);
export const fetchTracks = () => get(TRACK_API);

export const fetchArtist = (artist) => get(ARTIST_API+artist);
export const fetchAlbum = (album) => get(ALBUM_API+album);
export const fetchTrack = (track) => get(TRACK_API+track);

export const fetchAlbumsByArtist = (artist) => get(ALBUM_API+'artist/'+artist);
export const fetchTracksByArtist = (artist) => get(TRACK_API+'artist/'+artist);
export const fetchTracksByAlbum = (album) => get(TRACK_API+'album/'+album);

export const searchArtists = (keyword) => get(ARTIST_API+'search/'+keyword);
export const searchAlbums = (keyword) => get(ALBUM_API+'search/'+keyword);
export const searchTracks = (keyword) => get(TRACK_API+'search/'+keyword);

export const fetchFavorites = (user) => get(FAVORITE_API+'user/'+user);

export const insertFavorite = (user, track) => post(FAVORITE_API,{ user, track });

export const removeFavorite = (user, track) => fetch(FAVORITE_API+'',{
        method: 'DEL',
        headers: defaultHeaders,
        body: { user, track }
    })

export const checkFavorites = (user, tracks) => get(FAVORITE_API, { user, tracks });