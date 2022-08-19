const isPalindrome = (number) => {
    if(number === 0){
        return true;
    } else if(number < 0 || number % 10 === 0){
        return false;
    }

    let assembledNumber = 0;

    while(number > assembledNumber){
        assembledNumber = (assembledNumber * 10) + (number % 10);
        console.log(assembledNumber);
        number = Math.floor(number / 10);
        console.log(number);
    }

    return number === assembledNumber || number === Math.floor(assembledNumber / 10);
}

console.log(isPalindrome(10));