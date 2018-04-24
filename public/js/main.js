import {loadTracks} from './loaders.js';
import MusicPlayer from './MusicPlayer.js';
import {initializeTracks} from './initialize.js';


loadTracks("tracks").then(tracks => {
    const musicPlayer = new MusicPlayer();
    const audio = document.querySelector('.player');

    initializeTracks(musicPlayer, tracks);

    musicPlayer.addButton();
    // musicPlayer.pop();
    musicPlayer.start(audio);

    // const zipSlider = document.querySelector('.zip-slider');
    // zipSlider.oninput = function() {mf(audio)};

    // function mf(audio) {
    //     const startTime = document.querySelector('.start-time2');
    //     let calc = audio.duration * (zipSlider.value / 100);
    //     startTime.textContent = calc; // TERAZ TA WARTOSC PRZEROBIC NA TAKI ZAPIS 0:00
    //                                 // I UMIESCIC TO JAKOSC W FUNKCJI GDZIES W MUSIC PLAYER
    // }
});