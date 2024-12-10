function convert(type) {
    const decimalInput = document.getElementById('decimalInput').value;
    let result = '';

    if (decimalInput === '') {
        result = 'Please enter a number!';
    } else {
        const number = parseInt(decimalInput, 10);

        switch (type) {
            case 'binary':
                result = `Binary: ${convertToBinary(number)}`;
                break;
            case 'octal':
                result = `Octal: ${convertToOctal(number)}`;
                break;
            case 'hex':
                result = `Hexadecimal: ${convertToHexadecimal(number)}`;
                break;
            default:
                result = 'Invalid conversion type!';
        }
    }

    document.getElementById('result').innerText = result;
}

function convertToBinary(number) {
    let binary = '';
    while (number > 0) {
        binary = (number % 2) + binary;
        number = Math.floor(number / 2);
    }
    return binary || '0';
}

function convertToOctal(number) {
    let octal = '';
    while (number > 0) {
        octal = (number % 8) + octal;
        number = Math.floor(number / 8);
    }
    return octal || '0';
}

function convertToHexadecimal(number) {
    const hexCharacters = '0123456789ABCDEF';
    let hex = '';
    while (number > 0) {
        hex = hexCharacters[number % 16] + hex;
        number = Math.floor(number / 16);
    }
    return hex || '0';
}
