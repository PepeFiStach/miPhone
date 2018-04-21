import CreateTrack from './CreateTrack.js';
import {creator} from './creator.js';
import Timer from './Timer.js';

let COUNTER = 0;

export default class MusicPlayer { //KLASE BATONOW STWORZYC, TAKI CREATOR API
    constructor() {
        this.tracks = [];
    }

    addTrack(title, artist, img, src, color, display) {
        this.tracks.push(new CreateTrack(title, artist, img, src, color, display));
    }

    nextTrack() {
        const buttonNext = document.querySelector(".btn-next");
        const tmpTracks = this.tracks;

        creator(this.tracks);

        buttonNext.addEventListener('click', function() {
            COUNTER++;

            if (COUNTER >= tmpTracks.length) {
                COUNTER = 0;
            }

            creator(tmpTracks, COUNTER);
        });
    }

    prevTrack() {
        const buttonPrev = document.querySelector(".btn-prev");
        const tmpTracks = this.tracks;

        creator(this.tracks);

        buttonPrev.addEventListener('click', function() {
            COUNTER--;

            if (COUNTER < 0) {
                COUNTER = tmpTracks.length - 1;
            }

            creator(tmpTracks, COUNTER);
        });
    }

    startButton() {
        const start = document.querySelector('.btn-start');
        const audio = document.querySelector('.player');

        start.addEventListener('click', function() {
            audio.play();
        })
    }

    pauseButton() {
        const pause = document.querySelector('.btn-pause');
        const audio = document.querySelector('.player');

        pause.addEventListener('click', function() {
            audio.pause();
        })
    }

    zipUpdate() {
        const audio = document.querySelector('.player');
        const dot = document.querySelector('.zip-dot');

        let calc = ((audio.currentTime / audio.duration) * 100);

        dot.style.left = calc + '%';
    }

    update() {
        const timer = new Timer();
        this.zipUpdate();

        requestAnimationFrame(() => {
            this.update();
        }, 1000);
    }
}