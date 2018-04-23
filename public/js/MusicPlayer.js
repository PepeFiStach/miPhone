import CreateTrack from './CreateTrack.js';
import Timer from './Timer.js';
import Buttons from './Buttons.js';

export default class MusicPlayer {
    constructor() {
        this.tracks = [];
        this.buttons = [];
    }

    addTrack(title, artist, img, src, color) {
        this.tracks.push(new CreateTrack(title, artist, img, src, color));
    }

    addButton() {
        const b = document.querySelectorAll('button');
        b.forEach(el => {
            this.buttons.push(new Buttons(el.className, 'click'));
        });
    }

    start(audio) {
        this.buttons.forEach(button => {
            button.initializeButtons(this.tracks, audio);
        });

        this.update(audio);
    }

    zipUpdate(audio) {
        const zipSlider = document.querySelector('.zip-slider');

        zipSlider.addEventListener('mousedown', function() {
            audio.pause();
            // const startTime = document.querySelector('.start-time2');
            // startTime.textContent = zipSlider.value;
        });

        zipSlider.addEventListener('mouseup', function() {
            audio.currentTime = (zipSlider.value * audio.duration) / 100;
            audio.play();
        });

        if (!audio.paused) {
            let calc = ((audio.currentTime / audio.duration) * 100);
            zipSlider.value = calc;
        }
        // dot.style.left = calc + '%';
    }

    volume(audio) {
        const volume = document.querySelector('.volume-slider');

        audio.volume = (volume.value / 100);

    }

    update(audio) {
        const timer = new Timer();

        this.zipUpdate(audio);
        this.volume(audio);

        requestAnimationFrame(() => {
            this.update(audio);
        }, 1000);
    }
}