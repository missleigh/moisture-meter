let moistureReading = 0
input.onButtonPressed(Button.A, function () {
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.showNumber(Math.round(moistureReading))
    basic.clearScreen()
})
basic.forever(function () {
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 3)
    basic.pause(100)
    if (moistureReading < 1) {
        basic.showLeds(`
            # # . # #
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (moistureReading < 2) {
        basic.showLeds(`
            # # . # #
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
    }
})
