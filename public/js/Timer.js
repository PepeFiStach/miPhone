export default class Timer {
    constructor() {
        const audio = document.querySelector('.player');

        const startTime = document.querySelector('.start-time');
        startTime.textContent = this.acctualTime(audio);

        const endTime = document.querySelector('.end-time');
        endTime.textContent = this.finishTime(audio);
    }

    acctualTime(audio) {
        let time1 = 0;
        let time2 = Math.floor(audio.currentTime);
        let zero = "";

        while(time2 > 59) {
            time1++;
            time2 -= 60;
        }

        if(time2 < 10) {
            zero = "0";
        }

        let actuallyTime = time1 + ":"+ zero + time2;
        return actuallyTime; 
    }

    finishTime(audio) {
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
}