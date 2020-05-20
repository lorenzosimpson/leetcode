let input = [["5","3","2",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            ["9","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]]

var isValidSudoku = function(board) {
    const allRows = new Array(9).fill(null).map(() => ({}))
    const allCols = new Array(9).fill(null).map(() => ({}))
    const allBoxes = new Array(9).fill(null).map(() => ({}))
    
    // create a loop to identify each element ar board[row][col]
    
    for (let r=0; r<9; r++) {
        for (let c=0; c<9; c++) {
            const el = board[r][c]
            const box = Math.floor((c / 3) + Math.floor(r / 3) * 3)
            
            if (el !== '.') {
                if (allBoxes[box][el] || allCols[c][el] || allRows[r][el]) {
                    return false
                }
                
                allBoxes[box][el] = allCols[c][el] = allRows[r][el] = true
            }
        }
    }
    return true
    
};

console.log(isValidSudoku(input))