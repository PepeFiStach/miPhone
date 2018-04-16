export default class CreateTrack {
    constructor(title, artist, img, src, color) {
        this.setTrack(title, artist, img, src, color);
    }
    setTrack(title, artist, img, src, color) {
        this.title = title;
        this.artist = artist;
        this.img = img;
        this.src = src;
        this.color = color;
    }
}