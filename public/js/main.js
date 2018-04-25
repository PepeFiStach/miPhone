import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';
import {initializeTracks} from './initialize.js';


loadTracks("tracks").then(tracks => {
    const musicPlayer = new MusicPlayer();
    const audio = document.querySelector('.player');

    initializeTracks(musicPlayer, tracks);

    musicPlayer.addButton();
    musicPlayer.start(audio);
});