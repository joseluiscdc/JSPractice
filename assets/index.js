import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const play  = document.querySelector("#playButton")
const mute  = document.querySelector("#muteButton")

const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause() ]})

play.onclick = () => player.tooglePlay()
mute.onclick = () => player.toogleMute()


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
