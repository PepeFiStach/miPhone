import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';
import {initializeTracks} from './initialize.js';


loadTracks("tracks").then(tracks => {
    const musicPlayer = new MusicPlayer();

    initializeTracks(musicPlayer, tracks);

    // musicPlayer.nextTrack();
    musicPlayer.addButton();
    musicPlayer.start();
    // musicPlayer.prevTrack();
    musicPlayer.update();
    // musicPlayer.startButton();
    // musicPlayer.pauseButton();
});