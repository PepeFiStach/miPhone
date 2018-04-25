import CreateTrack from './CreateTrack.js';
import Timer from './Timer.js';
import Buttons from './Buttons.js';
import Zips from './Zips.js';

export default class MusicPlayer {
    constructor() {
        this.tracks = [];
        this.buttons = [];

        this.timer = new Timer();
        this.zips = new Zips(this.timer, this.timer.startTime);
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

        this.zips.zipSlider.oninput = () => this.zips.zipUpdateTime(audio, this.zips.zipSlider);
    }

    update(audio) {
        this.timer.setAcctualTime(audio);
        this.timer.setFinishTime(audio);

        if (Math.floor(audio.currentTime == audio.duration)) {
            const nextTrack = document.querySelector('.btn-next').click();
        }

        this.zips.zipUpdate(audio);
        // this.zips.zipVolume(audio);

        requestAnimationFrame(() => {
            this.update(audio);
        }, 1000);
    }
}