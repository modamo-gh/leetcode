const firstUniqueCharacter = (string) => {
    const letterFrequencies = {};

    for(let i = 0; i < string.length; i++){
        if(letterFrequencies.hasOwnProperty(string.charAt(i))){
            letterFrequencies[`${string.charAt(i)}`]++;
        }
        else{
            letterFrequencies[`${string.charAt(i)}`] = 1;
        }
    }

    const letterFrequenciesKeys = Object.keys(letterFrequencies);

    for(let i = 0; i < letterFrequenciesKeys.length; i++){
        const currentLetter = letterFrequenciesKeys[i];

        if(letterFrequencies[currentLetter] === 1){
            return string.indexOf(currentLetter);
        }
    }

    return -1;
}

console.log(firstUniqueCharacter("aabb"));