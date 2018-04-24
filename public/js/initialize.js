import {loadTracks} from './loaders.js';

export function initializeTracks(musicPlayer, tracks) {
    tracks.song.forEach(element => {
        const {title, 
                artist, 
                img, 
                src, 
                color} = element;

        musicPlayer.addTrack(title, artist, img, src, color);
    });
}