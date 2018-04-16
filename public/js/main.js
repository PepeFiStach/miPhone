import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';

loadTracks("tracks").then(tracks => {
	tracks.song.forEach(element => {
        const {title, 
                artist, 
                img, 
                src, 
                color} = element;

        const musicPlayer = new MusicPlayer();
        musicPlayer.addTrack(title, artist, img, src, color);
        musicPlayer.create();
    });
});