export default class CreateTrack {
    constructor(title, artist, img, src, color, display) {
        this.setTrack(title, artist, img, src, color, display);
    }
    setTrack(title, artist, img, src, color, display) {
        this.title = title;
        this.artist = artist;
        this.img = img;
        this.src = src;
        this.color = color;
        this.display = display;
    }
}