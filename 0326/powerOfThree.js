const powerOfThree = (number) => {
    const jsLogOfN = Math.log(n) / Math.log(3);
    const jsLogOfNIntegerLength = Math.trunc(jsLogOfN).toString().length;
    const logOfN = Number(jsLogOfN).toPrecision(14 + jsLogOfNIntegerLength);
    
    return Math.ceil(logOfN) - logOfN === 0;
}

console.log(powerOfThree(19682));