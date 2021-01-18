input.onButtonPressed(Button.A, function () {
    item = !(item)
})
let current_WindDirection_List = 0
let current_WindSpeed = 0
let item = false
serial.redirectToUSB()
weatherbit.startWindMonitoring()
item = true
basic.forever(function () {
    let wind_direction = 0
    let wind_speed = 0
    current_WindSpeed = wind_speed
    current_WindDirection_List = wind_direction
    if (item) {
        basic.showString("\"Sp\"")
        basic.showNumber(Math.trunc(current_WindSpeed))
    } else {
        basic.showString("\"Dir\"")
        basic.showString("" + (current_WindDirection_List))
    }
    serial.writeLine("" + current_WindSpeed + "\",\"" + current_WindDirection_List)
})
