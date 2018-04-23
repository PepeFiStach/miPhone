import {creator} from './creator.js';

let COUNTER = 0;

export default class Buttons {
    constructor(name, event) {
        this.name = name;
        this.event = event;
    }

    initializeButtons(tracks, audio) {

        if(this.name == 'btn-next')
            this.nextTrack(tracks, audio);
        else if(this.name =='btn-prev')
            this.prevTrack(tracks, audio);
        else if(this.name == 'btn-start')
            this.startButton(audio);
        else if(this.name == 'btn-pause')
            this.pauseButton(audio);
    }

    nextTrack(tracks, audio) {
        const buttonNext = document.querySelector(`.${this.name}`);
        const tmpTracks = tracks;

        creator(tracks);

        buttonNext.addEventListener('click', function() {
            COUNTER++;

            if (COUNTER >= tmpTracks.length) {
                COUNTER = 0;
            }

            creator(tmpTracks, COUNTER);
            audio.play();
        });
    }

    prevTrack(tracks, audio) {
        const buttonPrev = document.querySelector(`.${this.name}`);
        const tmpTracks = tracks;

        creator(tracks);

        buttonPrev.addEventListener('click', function() {
            COUNTER--;

            if (COUNTER < 0) {
                COUNTER = tmpTracks.length - 1;
            }

            creator(tmpTracks, COUNTER);
            audio.play();
        });
    }

    startButton(audio) {
        const start = document.querySelector(`.${this.name}`);

        start.addEventListener('click', function() {
            audio.play();
        })
    }

    pauseButton(audio) {
        const pause = document.querySelector(`.${this.name}`);

        pause.addEventListener('click', function() {
            audio.pause();
        });
    }
}