import CreateTrack from './CreateTrack.js';
import Timer from './Timer.js';
import Buttons from './Buttons.js';

export default class MusicPlayer {
    constructor() {
        this.tracks = [];
        this.buttons = [];
    }

    addTrack(title, artist, img, src, color, display) {
        this.tracks.push(new CreateTrack(title, artist, img, src, color, display));
    }

    addButton() {
        const b = document.querySelectorAll('button');
        b.forEach(el => {
            this.buttons.push(new Buttons(el.className, 'click'));
        });
    }

    start() {
        this.buttons.forEach(button => {
            button.initializeButtons(this.tracks);
        });
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