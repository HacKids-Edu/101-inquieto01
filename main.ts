// quando o botão A for pressionado será apresentado a cara feliz
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
// agite o micro:bit para mostrar uma piscada
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
// quando o botão A+B for pressionado será apresentado a carinha piscando 
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
// quando o botão B for pressionado será apresentado a cara triste
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # # . # #
        . . . . .
        . # # # .
        `)
})
// ao iniciar queremos que sempre limpe a tela, e em seguida mostre uma cara de "paisagem"
basic.clearScreen()
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . . # . .
    . . . . .
    `)
