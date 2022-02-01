let y = 0
let x = 0
let pintar_x = 0
basic.forever(function () {
    y = input.acceleration(Dimension.Y)
    x = input.acceleration(Dimension.X)
    led.unplot(pintar_x, 0)
    if (x < -600) {
        pintar_x = 0
    } else if (x < -300) {
        pintar_x = 1
    } else if (x > 600) {
        pintar_x = 4
    } else if (x > 300) {
        pintar_x = 3
    } else {
        pintar_x = 2
    }
    led.plot(pintar_x, 0)
})
