const romanNumeralValues = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);

const romanToInteger = (romanNumeral) => {
    const romanNumeralLength = romanNumeral.length;
    let previousValue = 0;
    let integer = 0;

    for(let i = romanNumeralLength - 1; i >= 0; i--){
        const currentRomanNumeralValue = romanNumeralValues.get(romanNumeral.charAt(i));
        if(currentRomanNumeralValue < previousValue){
            integer -= currentRomanNumeralValue;
        }
        else {
            integer += currentRomanNumeralValue;
        }

        previousValue = currentRomanNumeralValue;
    }

    return integer;
}

console.log(romanToInteger("MCMXCIV"));