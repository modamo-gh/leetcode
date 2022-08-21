const romanToInteger = (romanNumeral) => {
    const romanNumeralLength = romanNumeral.length;
    let integer = 0;

    for(let i = 0; i < romanNumeralLength; i++){
        if(romanNumeral.charAt(i) === "M"){
            if(i !== 0 && romanNumeral.charAt(i - 1) === "C"){
                continue;
            }
            else{
                integer += 1000;
            }
        }
        else if(romanNumeral.charAt(i) === "D"){
            if(i !== 0 && romanNumeral.charAt(i - 1) === "C"){
                continue;
            }
            else{
                integer += 500;
            }
        }
        else if(romanNumeral.charAt(i) === "C"){
            if(romanNumeral.charAt(i + 1) === "D"){
                integer += 400;
            }
            else if(romanNumeral.charAt(i + 1) === "M"){
                integer += 900;
            }
            else if(i !== 0 && romanNumeral.charAt(i - 1) === "X"){
                continue;
            }
            else {
                integer += 100;
            }
        }
        else if(romanNumeral.charAt(i) === "L"){
            if(i !== 0 && romanNumeral.charAt(i - 1) === "X"){
                continue;
            }
            else {
                integer += 50;
            }
        }
        else if(romanNumeral.charAt(i) === "X"){
            if(romanNumeral.charAt(i + 1) === "L"){
                integer += 40;
            }
            else if(romanNumeral.charAt(i + 1) === "C"){
                integer += 90;
            }
            else if(i !== 0 && romanNumeral.charAt(i - 1) === "I"){
                continue;
            }
            else {
                integer += 10;
            }
        } 
        else if(romanNumeral.charAt(i) === "V"){
            if(i !== 0 && romanNumeral.charAt(i - 1) === "I"){
                continue;
            }
            else {
                integer += 5;
            }
        }
        else if(romanNumeral.charAt(i) === "I"){
            if(romanNumeral.charAt(i + 1) === "V"){
                integer += 4;
            }
            else if(romanNumeral.charAt(i + 1) === "X"){
                integer += 9;
            }
            else {
                integer += 1;
            }
        } 
    }

    return integer;
}

console.log(romanToInteger("MCMXCIV"));