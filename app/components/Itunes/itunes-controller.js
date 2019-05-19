import ItunesService from "./itunes-service.js";

//Private
let _itunesService = new ItunesService()

function _drawSongs() {
  //my stuff here
  let songs = _itunesService.Songs
  let template = ''
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    console.log('Song', song)
    template += song.Template

  }
  document.getElementById('songs').innerHTML = template;

  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  //console.log(_itunesService.Songs)

}
//event listner stuff here
// document.addEventListener('play', pauseAudio());

// function pauseAudio(e) {
//   let audios = document.getElementsByTagName('audio')
//   for (let i = 0; i < audios.length; i++) {
//     let audio = audios[i]
//     if (e.target == audio) {
//       audio.play()
//     } else {
//       audio.pause()
//     }
//   }
// }

//PUBLIC
export default class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    _drawSongs()
    _itunesService.addSubscriber('songs', _drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _itunesService.getMusicByArtist(artist)
  }

}
