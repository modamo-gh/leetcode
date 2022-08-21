const longestCommonPrefix = (strings) => {
    let longestCommonPrefix = "";
    const comparisonString = strings[0];
    const comparisonStringLength = comparisonString.length;

    for(let i = 0; i < comparisonStringLength; i++){
        const currentComparisonStringLetter = comparisonString.charAt(i);
        const stringsLength = strings.length;

        for(let j = 1; j < stringsLength; j++){
            const currentStringLetter = strings[j].charAt(i);
            if(currentStringLetter === currentComparisonStringLetter){
                continue;
            }
            else {
                return longestCommonPrefix;
            }
        }

        longestCommonPrefix += currentComparisonStringLetter;
    }

    return longestCommonPrefix;
}

console.log(longestCommonPrefix([""]));