import CreateTrack from './CreateTrack.js';

export default class MusicPlayer {
    constructor() {
        this.tracks = [];
    }

    addTrack(title, artist, img, src, color) {
        this.tracks.push(new CreateTrack(title, artist, img, src, color));
    }

    create() {
        this.tracks.forEach(track => {
            let audio = document.querySelector('.player');
            audio.setAttribute('src', track.src);

            let albumImg = document.querySelector('.album-img');
            albumImg.setAttribute('src', track.img);

            let h3 = document.querySelector('h3');
            let tmpH3 = document.createTextNode(track.title);
            h3.appendChild(tmpH3);

            let p = document.querySelector('p');
            let tmpP = document.createTextNode(track.artist);
            p.appendChild(tmpP);

            this.update(audio);
        });
    }

    update(audio) {
        const startTime = document.querySelector('.start-time');
        startTime.textContent = setTime(audio);


        const endTime = document.querySelector('.end-time');
        endTime.textContent = endTime2(audio);

        function setTime(audio) {
            let time1 = 0;
            let time2 = Math.floor(audio.currentTime);
            let zero = "";
            if(time2 > 59) {
                time1++;
                time2 -= 60;
                console.log(time2);
            }

            if(time2 < 10) {
                zero = "0";
            }
            let actuallyTime = time1 + ":"+ zero + time2;
            return actuallyTime; 
        }

        function endTime2(audio) {
            let time1 = 0;
            let time2 = Math.floor(audio.duration);
            let zero = "";

            while(time2 > 59) {
                time1++;
                time2 -= 60;
            }

            if(time2 < 10) {
                zero = "0";
            }

            let actuallyTime = time1 + ":" + zero + time2;
            return actuallyTime; 
        }

        requestAnimationFrame(() => {
            this.update(audio);
        }, 1000);
    }
}