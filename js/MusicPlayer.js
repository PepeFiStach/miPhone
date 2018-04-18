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

    timer(context, screen) {
        const timer = new Timer();
        this.zipUpdate(context, screen);
        requestAnimationFrame(() => {
            this.timer(context, screen);
        }, 1000);
    }

    start() {
        const startButton = document.querySelector('.btn-start');
        const audio = document.querySelector('.player');

        startButton.addEventListener('click', function() {
            audio.play();
        })
    }

    zipUpdate(context, screen) {
        const audio = document.querySelector('.player');
        const dot = document.querySelector('.zip-dot');

        screen.width = 280;
        screen.height = 10;

        let calc = ((audio.currentTime / audio.duration) * 100);

        dot.style.left = calc + '%';

        // const dot = {
        //     x: 25 + ((audio.currentTime / audio.duration) * 100), //25 px START 197px END
        //     y: 0,                      // 172 px to droga
        //     color: "green",
        //     width: 10,
        //     height: 10,
        // }
        // context.fillStyle = dot.color;
        // context.fillRect(dot.x, dot.y, dot.width, dot.height);
        // context.fillStyle = "red";
        // context.fillRect(25 -1, dot.y, 1, 10);
        // context.fillRect(197 +1 , dot.y, 1, 10);
    }
}