var letterCombinations = function(digits) {
    // recursive, add each letter to the combos after it 
    const phone = {'2': ['a', 'b', 'c'],
                 '3': ['d', 'e', 'f'],
                 '4': ['g', 'h', 'i'],
                 '5': ['j', 'k', 'l'],
                 '6': ['m', 'n', 'o'],
                 '7': ['p', 'q', 'r', 's'],
                 '8': ['t', 'u', 'v'],
                 '9': ['w', 'x', 'y', 'z']}
    
    let output = []
    function helper(current_combination, leftover_digits) { // main recursive function
        // go get the set of letters
        // loop through them and add each to the last ones
        if (leftover_digits.length === 0) {
            output.push(current_combination)
        }
        else {
        let letters = phone[leftover_digits[0]]
        for (let i=0; i<letters.length; i++) {
           helper(current_combination + letters[i], leftover_digits.substring(1))
            }
        }
    }
    if (digits) helper('', digits)
    return output
};