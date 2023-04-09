moistureReading = 0

def on_button_pressed_a():
    global moistureReading
    moistureReading = Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.show_number(Math.round(moistureReading))
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global moistureReading
    moistureReading = Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 3)
    basic.pause(100)
    if moistureReading < 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    else:
        pass
basic.forever(on_forever)
