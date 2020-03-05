function validParentheses(parens) {
    status = true
    while (true) {
        parens = parens.replace('[]', '')
        parens = parens.replace('()', '')
        parens = parens.replace('{}', '')

        if (
            parens.indexOf('[]') == -1 &&
            parens.indexOf('()') == -1 &&
            parens.indexOf('{}') == -1 &&
            parens.length > 0
        ) {
            status = false
            break
        } else if (parens.length == 0) {
            break
        }
    }

    return status
}

console.log(validParentheses("()"));
console.log(validParentheses("())"));