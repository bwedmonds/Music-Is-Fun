export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    //draw general layout here
    get Template() {
        return `
<div class="card mb-3 border-dark" style="max-width: 500px;">
<div class="row no-gutters">
<div class="col-md-4">
<img src="${this.albumArt}" class="card-img" alt="${this.albumArt}">
</div>
<div class="col-md-8”>
<div class="card-body bg-light">
<h4 class="card-title text-center">${this.artist}</h4>
<h5 class="card-title text-center">${this.title}</h5>
<p class="card-text text-center">Buy at iTunes for $${this.price}</p>
<audio controls id="audioPlayer">
<source src="${this.preview}" type="audio/ogg">
<source src="${this.preview}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
</div>
</div>
</div>
</div>
        `
    }
}