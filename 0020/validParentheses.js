const validParentheses = (parentheses) => {
    const parenthesesArray = [];
    const closingParentheses = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const parenthesesLength = parentheses.length;

    for(let i = 0; i < parenthesesLength; i++){
        const currentParenthesis = parentheses[i];
        if(currentParenthesis === "(" || currentParenthesis === "{" || currentParenthesis === "["){
            parenthesesArray.push(currentParenthesis);
        }
        else {
            const lastAddedParenthesis = parenthesesArray.pop();

            if(lastAddedParenthesis !== closingParentheses[currentParenthesis]){
                return false;
            }
        }
    }

    return parenthesesArray.length === 0;
}

console.log(validParentheses("(]"));