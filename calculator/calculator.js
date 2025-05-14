

const display = document.querySelector('#display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    display.value = eval(display.value)
}

function convertTime(unit) {
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        alert("Digite um número válido antes de converter!");
        return;
    }

    let result;

    switch(unit) {
        case 'days':
            result = value / 24;
            display.value = `${result} dia(s)`;
            break;
        case 'hours':
            result = value * 24;
            display.value = `${result} hora(s)`;
            break;
        case 'minutes':
            result = value * 24 * 60;
            display.value = `${result} minuto(s)`;
            break;
        case 'seconds':
            result = value * 24 * 60 * 60;
            display.value = `${result} segundo(s)`;
            break;
        default:
            alert("Unidade desconhecida.");
    }
}