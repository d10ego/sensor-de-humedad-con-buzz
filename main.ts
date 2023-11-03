let humedad = 0
basic.forever(function () {
    basic.pause(1000)
    humedad = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 290, 0, 100)
    basic.showString("" + (Math.round(humedad)))
    if (humedad < 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (humedad >= 10 && humedad < 50) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        pins.setAudioPin(AnalogPin.P0)
        music.play(music.stringPlayable("C E F G C E F G ", 120), music.PlaybackMode.InBackground)
    }
})
