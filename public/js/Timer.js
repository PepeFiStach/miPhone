export default class Timer {
    constructor() {
        this.startTime = document.querySelector('.start-time');
        this.endTime = document.querySelector('.end-time');

    }

    acctualTime(calcTime) {
        let time1 = 0;
        let time2 = Math.floor(calcTime);
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

    setAcctualTime(audio) {
        if (!audio.paused) {
            this.startTime.textContent = this.acctualTime(audio.currentTime);
        }
    }

    setFinishTime(audio) {
        this.endTime.textContent = this.finishTime(audio);
    }

    finishTime(audio) {
        let time1 = 0;
        let time2 = Math.floor(audio.duration);
        
        if (isNaN(time2))
            time2 = 0;

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