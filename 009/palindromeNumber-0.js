const isPalindome = () => {
    const xAsAString = x.toString();
    const xReversed = xAsAString.split("").reverse().join("");
    
    return xAsAString === xReversed;
}