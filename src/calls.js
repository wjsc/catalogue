const ARTIST_API='http://localhost:3001/artist/';
const ALBUM_API='http://localhost:3001/album/';
const TRACK_API='http://localhost:3001/track/';

export const defaultHeaders={ 'Accept': 'application/json', 'Content-Type': 'application/json' };
export const options={ method:'GET', headers: defaultHeaders};
const resjson = res => res.json();

export const fetchArtists = () => fetch(ARTIST_API, options).then(resjson);
export const fetchAlbums = () => fetch(ALBUM_API, options).then(resjson);
export const fetchTracks = () => fetch(TRACK_API, options).then(resjson);

export const fetchArtist = (artistId) => fetch(ARTIST_API+artistId, options).then(resjson);
export const fetchAlbum = (albumId) => fetch(ALBUM_API+albumId, options).then(resjson);
export const fetchTrack = (trackId) => fetch(TRACK_API+trackId, options).then(resjson);

export const fetchAlbumsByArtist = (artistId) => fetch(ALBUM_API+'artist/'+artistId, options).then(resjson);
export const fetchTracksByArtist = (artistId) => fetch(TRACK_API+'artist/'+artistId, options).then(resjson);
export const fetchTracksByAlbum = (albumId) => fetch(TRACK_API+'album/'+albumId, options).then(resjson);

export const searchArtists = (keyword) => fetch(ARTIST_API+'search/'+keyword, options).then(resjson);
export const searchAlbums = (keyword) => fetch(ALBUM_API+'search/'+keyword, options).then(resjson);
export const searchTracks = (keyword) => fetch(TRACK_API+'search/'+keyword, options).then(resjson);
