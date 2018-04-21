import {creator} from './creator.js';

let COUNTER = 0;

export default class Buttons {
    constructor(name, event) {
        this.name = name;
        this.event = event;
        this.audio = document.querySelector('.player');
    }

    initializeButtons(tracks) {

        if(this.name == 'btn-next')
            this.nextTrack(tracks);
        else if(this.name =='btn-prev')
            this.prevTrack(tracks);
        else if(this.name == 'btn-start')
            this.startButton();
        else if(this.name == 'btn-pause')
            this.pauseButton();
    }

    nextTrack(tracks) {
        const buttonNext = document.querySelector(`.${this.name}`);
        const tmpTracks = tracks;

        creator(tracks);

        buttonNext.addEventListener('click', function() {
            COUNTER++;

            if (COUNTER >= tmpTracks.length) {
                COUNTER = 0;
            }

            creator(tmpTracks, COUNTER);
        });
    }

    prevTrack(tracks) {
        const buttonPrev = document.querySelector(`.${this.name}`);
        const tmpTracks = tracks;

        creator(tracks);

        buttonPrev.addEventListener('click', function() {
            COUNTER--;

            if (COUNTER < 0) {
                COUNTER = tmpTracks.length - 1;
            }

            creator(tmpTracks, COUNTER);
        });
    }

    startButton() {
        const start = document.querySelector(`.${this.name}`);
        
        let _audio = this.audio;
        start.addEventListener('click', function() {
            _audio.play();
        })
    }

    pauseButton() {
        const pause = document.querySelector(`.${this.name}`);

        let _audio = this.audio;
        pause.addEventListener('click', function() {
            _audio.pause();
        })
    }
}