export default class Zips {
    constructor(timer, startTime) {
        this.timer = timer;
        this.zipSlider = document.querySelector('.zip-slider');
        this.volume = document.querySelector('.volume-slider');
        this.startTime = startTime;
    }

    zipUpdateTime(audio, zip) {
        audio.pause();
        let calc = audio.duration * (zip.value / 100);
        this.startTime.textContent = this.timer.acctualTime(calc, audio);
    }

    zipUpdate(audio) {
        const zipSlider = this.zipSlider;

        zipSlider.addEventListener('mousedown', function () {
            audio.pause();
        });

        zipSlider.addEventListener('mouseup', function () {
            audio.currentTime = (zipSlider.value * audio.duration) / 100;
            audio.play();
        });

        if (!audio.paused) {
            let calc = ((audio.currentTime / audio.duration) * 100);
            zipSlider.value = calc;
        }
    }

    zipVolume(audio) {
        const volume = this.volume;

        audio.volume = (volume.value / 100);
    }
}