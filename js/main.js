import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';

const screen = document.getElementById('screen');
const context = screen.getContext('2d');

// context.fillStyle = "green";
// context.fillRect(0, 0, 232, 10);

// context.fillStyle = "green";
// context.fillRect(30, 260, 10, 10);

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
        musicPlayer.timer(context, screen);
        musicPlayer.start();
});