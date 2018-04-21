import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';
import {initializeTracks} from './initialize.js';


loadTracks("tracks").then(tracks => {
    const musicPlayer = new MusicPlayer();

    initializeTracks(musicPlayer, tracks);

    musicPlayer.addButton();
    musicPlayer.start();
    musicPlayer.update();
});