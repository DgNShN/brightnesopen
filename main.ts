input.onButtonPressed(Button.A, function () {
    while (brirghtnesOpen > 0) {
        brirghtnesOpen += -5
        led.setBrightness(brirghtnesOpen)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    while (brirghtnesOpen < 255) {
        brirghtnesOpen += 5
        led.setBrightness(brirghtnesOpen)
        basic.pause(100)
    }
})
let brirghtnesOpen = 0
brirghtnesOpen = 255
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
