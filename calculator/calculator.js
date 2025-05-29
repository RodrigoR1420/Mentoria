




























































const display = document.getElementById("display");
let tempo = 'days'

function appendToDisplay(input){
    display.value += input
}

function addChar(unit) {
    let value = display.value;
    const match = value.match(/(\d+)(?![dhms])$/)

    if (match) {
        display.value = value.slice(0, -match[0].length) + match[0] + unit
    }
}

function clearDisplay() {
    display.value = ''
}

function convertTime(unit) {
    tempo = unit
}

function calculate() {
    const input = display.value
    const regex = /(\d+)([dhms])/g
    let match;
    let totalSeconds = 0

    while ((match = regex.exec(input)) !== null) {
        const value = +match[1]
        const unit = match[2]

        switch (unit) {
            case 'd':
                totalSeconds += value * 86400;
                break;
            case 'h':
                totalSeconds += value * 3600;
                break;
            case 'm':
                totalSeconds += value * 60;
                break;
            case 's':
                totalSeconds += value;
                break;
        }
    }

    let result
    switch (targetUnit) {
        case 'days':
            result = totalSeconds / 86400;
            display.value = `${result} dia(s)`
            break;
        case 'hours':
            result = totalSeconds / 3600;
            display.value = `${result} hora(s)`
            break;
        case 'minutes':
            result = totalSeconds / 60;
            display.value = `${result} minuto(s)`
            break;
        case 'seconds':
            result = totalSeconds;
            display.value = `${result} segundo(s)`
            break
        default:
            alert("Unidade desconhecida.")
    }
}
*/

