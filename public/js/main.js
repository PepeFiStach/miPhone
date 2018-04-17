import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';

loadTracks("tracks").then(tracks => {
    const musicPlayer = new MusicPlayer();
    tracks.song.forEach(element => {
        const {title, 
                artist, 
                img, 
                src, 
                color,
                display} = element;

        musicPlayer.addTrack(title, artist, img, src, color, display);
    });
        musicPlayer.update();
        musicPlayer.timer();
        musicPlayer.start();
});