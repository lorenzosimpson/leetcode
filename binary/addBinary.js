var addBinary = function(a, b) {
    let max = Math.max(a.length, b.length)
    // fill the shorter string with leading zeroes to match the second
    a.length > b.length ? b = b.padStart(max, '0') : a = a.padStart(max, '0')
    
    let carry = 0;
    let result = ''
    
    for (let i=max-1; i>= 0; i--) { // start at the end of the strings
        let r = carry // get the carry from the previous iteration
        
        if (a[i] === '1') r += 1
        if (b[i] === '1') r += 1
        
        let thisDigit;
        if (r % 2 === 1) thisDigit = '1'
        else thisDigit = '0';
        
        console.log(r, thisDigit)
        result = thisDigit + result
        if (r < 2) carry = 0
        else carry = 1
    }
    
    if (carry > 0) {
        result = '1' + result
    }
    
    return result
};