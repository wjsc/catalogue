import {userLink} from './components/userLink';
import {config} from './config/default.js';

export const CDN_URL = config.cdn_url;
const API = config.api_url;
const ARTIST_API =  API + 'artist/';
const ALBUM_API = API + 'album/';
const TRACK_API = API + 'track/';
const FAVORITE_API = API + 'favorite/';
const HISTORY_API = API + 'history/';

const resjson = res => res.json();
const asArray = obj => Array.isArray(obj) ? obj : [obj];
const queryString = obj => obj ? '?' + Object.keys(obj).reduce((a,k) => {a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&') : '';

const defaultHeaders={ 'Accept': 'application/json', 'Content-Type': 'application/json' };
const options={ method:'GET', headers: defaultHeaders};

const get = (endpoint, params) => fetch(endpoint + queryString(params), {method: 'GET', options: options, headers: defaultHeaders}).then(resjson);
const post = (endpoint, body) => fetch(endpoint, {method: 'POST', options: options, headers: defaultHeaders, body: JSON.stringify(body)}).then(resjson);
const del = (endpoint, body) => fetch(endpoint, {method: 'DELETE', options: options, headers: defaultHeaders, body: JSON.stringify(body)}).then(resjson);

export const fetchPaginatedArtists = (offset, limit) => get(ARTIST_API, {offset, limit}).then(asArray);
export const fetchPaginatedAlbums = (offset, limit) => get(ALBUM_API, {offset, limit}).then(asArray);
export const fetchPaginatedTracks = (offset, limit) => get(TRACK_API, {offset, limit}).then(asArray);
export const fetchPaginatedFavorites = (offset, limit) => get(FAVORITE_API+'user/'+userLink.getUid(), {offset, limit}).then(asArray);
export const fetchPaginatedHistory = (offset, limit) => get(HISTORY_API+'user/'+userLink.getUid(), {offset, limit}).then(asArray);

export const fetchArtists = (artists) => artists ? get(ARTIST_API+artists).then(asArray) : Promise.resolve([]);
export const fetchAlbums = (albums) => albums ? get(ALBUM_API+albums).then(asArray) : Promise.resolve([]);
export const fetchTracks = (tracks) => tracks ? get(TRACK_API+tracks).then(asArray) : Promise.resolve([]);

export const fetchArtist = (artist) => get(ARTIST_API+artist);
export const fetchAlbum = (album) => get(ALBUM_API+album);
export const fetchTrack = (track) => get(TRACK_API+track);

export const fetchAlbumsByArtist = (artist) => get(ALBUM_API+'artist/'+artist).then(asArray);
export const fetchTracksByArtist = (artist) => get(TRACK_API+'artist/'+artist).then(asArray);
export const fetchTracksByAlbum = (album) => get(TRACK_API+'album/'+album).then(asArray);

export const searchArtists = (keyword) => get(ARTIST_API+'search/'+keyword).then(asArray);
export const searchAlbums = (keyword) => get(ALBUM_API+'search/'+keyword).then(asArray);
export const searchTracks = (keyword) => get(TRACK_API+'search/'+keyword).then(asArray);

export const insertFavorite = (track) => post(FAVORITE_API,{ user: userLink.getUid(), track });
export const insertHistory = (track) => post(HISTORY_API,{ user: userLink.getUid(), track, date: new Date().toISOString() });

export const removeFavorite = (track) => del(FAVORITE_API,{ user: userLink.getUid(), track } );

export const checkFavorites = (tracks) => get(FAVORITE_API, { user: userLink.getUid(), tracks }).then(asArray);
