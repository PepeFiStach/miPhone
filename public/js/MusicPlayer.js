import CreateTrack from './CreateTrack.js';
import {creator} from './creator.js';
import Timer from './Timer.js';

export default class MusicPlayer {
    constructor() {
        this.tracks = [];
    }

    addTrack(title, artist, img, src, color, display) {
        this.tracks.push(new CreateTrack(title, artist, img, src, color, display));
    }

    update() {
        const button = document.querySelector(".btn-next");
        let counter = 0;
        const tmpTracks = this.tracks;

        creator(this.tracks);
        button.addEventListener('click', function() {
            counter++;

            if (counter >= tmpTracks.length) {
                counter = 0;
            }

            creator(tmpTracks, counter);
        });
    }

    timer() {
        const timer = new Timer();
        requestAnimationFrame(() => {
            this.timer();
        });
    }

    start() {
        const startButton = document.querySelector('.btn-start');
        const audio = document.querySelector('.player');

        startButton.addEventListener('click', function() {
            audio.play();
        })
    }
}