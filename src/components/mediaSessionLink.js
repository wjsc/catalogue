import {playerLink} from './playerLink';
import {CDN_URL} from '../calls'

export const mediaSessionLink = {
    init: () => {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.setActionHandler('play', playerLink.togglePlay);
            navigator.mediaSession.setActionHandler('pause', playerLink.togglePlay);
            navigator.mediaSession.setActionHandler('previoustrack', playerLink.prev);
            navigator.mediaSession.setActionHandler('nexttrack', playerLink.next);
        }
    },
    changeMediaSession: (track, album) => {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: track.title,
                artist: track.artist.name,
                album: track.album.title,
                artwork: [
                    { src: CDN_URL+album.cover, type: 'image/png' }
                ]
            });
        }
    }
}
