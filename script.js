function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('input').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    let outputTemp;


    if (isNaN(inputTemp)) {
        alert('Please enter a valid number');
        return;
    }

    //  to fahrenheit
    if (from === "Celsius") {
        outputTemp = (inputTemp * 9/5) + 32; 
    } else if (from === "Kelvin") {
        outputTemp = (inputTemp - 273.15) * 9/5 + 32; 
    } else if (from === "Fahrenheit") {
        outputTemp = inputTemp; 
    }

    // from fahrenheit to output
    if (to === "Celsius") {
        outputTemp = (outputTemp - 32) * 5/9;
    } else if (to === "Kelvin") {
        outputTemp = ((outputTemp - 32) * 5/9) + 273.15; 
    }

    document.getElementById('output').value = outputTemp.toFixed(2);
}