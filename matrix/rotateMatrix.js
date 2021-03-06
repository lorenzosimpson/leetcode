const initial = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotateMatrix(matrix) {
    let len = matrix.length

    for (let i=0; i<len; i++) {
        for (let j=i; j<len; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    // for (let i=0; i<len; i++) {
    //     for (let j=0; j<(len/2); j++) {
    //         let temp = matrix[i][j]
    //         matrix[i][j] = matrix[i][len - 1 -j]
    //         matrix[i][len - 1 - j] = temp
    //     }
    // } 
    // same as reversing each
    for (let i=0;i<len; i++) {
        matrix[i].reverse()
    }
    return matrix
}

console.log(rotateMatrix(initial))

