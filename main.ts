input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let botaonaopressionado = true
basic.forever(function () {
    while (botaonaopressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            botaonaopressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            music.ringTone(523)
            botaonaopressionado = false
        }
    }
})
