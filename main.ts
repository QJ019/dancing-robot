input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
    }
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . # # # .
            # . . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # # # .
            . # . . #
            `)
        basic.pause(500)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # # # .
            . # . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . # # # .
            . # . # .
            `)
        basic.pause(500)
    }
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            # # # # #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.pause(500)
    }
    basic.pause(1000)
    basic.clearScreen()
})
