export function creator(tracks, counter = 0) {
    tracks.forEach((track, index) => {

        if (index === counter) {
            const audio = document.querySelector('.player');
            audio.setAttribute('src', track.src);

            const albumImg = document.querySelector('.album-img');
            albumImg.setAttribute('src', track.img);

            const h3 = document.querySelector('h3');
            h3.textContent = track.title;

            const p = document.querySelector('p');
            p.textContent = track.artist;
        }
    });
}