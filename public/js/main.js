import {loadTracks} from './loaders.js';

loadTracks("tracks").then(tracks => {
	tracks.song.forEach(element => {
        const {title, 
                artist, 
                img, 
                src, 
                color} = element;

        createTrack(title, artist, img, src, color);
    });
});

function createTrack(title, artist, img, src, color) {
        const audio = document.createElement('audio');
        audio.setAttribute('src', src);
        audio.setAttribute('controls', 'controls');
        document.body.appendChild(audio);

        let h3 = document.createElement('h3');
        let tmpH3 = document.createTextNode(title);
        h3.appendChild(tmpH3);
        document.body.appendChild(h3);
}