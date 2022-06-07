const calculateTemp = () => {
    const numberValue = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const tempType = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        // let fahrenheit = Math.round((cel* 9/5) + 32);
        let fahrenheit = ((cel* 9/5) + 32);
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        // let celcius = Math.round( (fah-32) * 5/9 );
        let celcius = ( (fah-32) * 5/9 );
        return celcius;
    }
    let result;
    if(tempType == 'cel'){
        result = celToFah(numberValue);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
    }
    else{
        result = fahToCel(numberValue);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius`;
    }
}