class MediaPlayer {
    constructor(cnf) {
        this.media = cnf.el
        this.plugins = cnf.plugins || []
        this.sinitPlugins()
    }

    initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }

    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    mute() {
        this.media.muted = true
    }

    unmute() {
        this.media.muted = false
    }

    tooglePlay() {
        this.media.paused ? this.play() : this.pause()
    }

    toogleMute() {
        this.media.muted ? this.unmute() : this.mute()
    }
}

export default MediaPlayer