// const initial = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// function rotateMatrix(matrix) {
//     let len = matrix.length

//     for (let i=0; i<len; i++) {
//         for (let j=i; j<len; j++) {
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i]
//             matrix[j][i] = temp
//         }
//     }
//     // for (let i=0; i<len; i++) {
//     //     for (let j=0; j<(len/2); j++) {
//     //         let temp = matrix[i][j]
//     //         matrix[i][j] = matrix[i][len - 1 -j]
//     //         matrix[i][len - 1 - j] = temp
//     //     }
//     // }
//     for (let i=0;i<len; i++) {
//         matrix[i].reverse()
//     }
//     return matrix
// }

// console.log(rotateMatrix(initial))



let input = [["5","3","2",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]]

var isValidSudoku = function(board) {
    // const rows = new Array(9).fill(null).map(() => ({}))
    // const cols = new Array(9).fill(null).map(() => ({}))
    // const boxes = new Array(9).fill(null).map(() => ({}))

    // // make a hash table of each row, column and box
    // // if that element appears again, break and return false
    // // return true by default

    // for (let r=0; r< 9; r++) {
    //   for (let c=0; c<9; c++) {
    //     const entry = board[r][c]
    //     box = Math.floor(c / 3) + (Math.floor(r / 3) * 3);

    //     if (entry !== '.') {

    //       if (boxes[box][entry] || rows[r][entry] || cols[c][entry]) {
    //         console.log('rows', rows)
    //         console.log('columns', cols)
    //         console.log('boxes', boxes)
    //           return false
    //       }

    //       boxes[box][entry] = cols[c][entry] = rows[r][entry] = true
    //     }

    //   }

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

// console.log(isValidSudoku(input))


// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j=0; j<nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++
//             nums[i] = nums[j]
//         }
//         console.log('i', i, 'j', j)
//     }
//     return i + 1
// };

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6]))

// const prices = [7,6,2,1,0]

// function maxProfit(prices) {
//     let max = 0

//     for (let i=1; i<prices.length; i++) {
//         if (prices[i] > prices[i - 1]) {
//             max += prices[i] - prices[i - 1]
//         }
//     }
//     return max
// }

// console.log(maxProfit(prices))

// const ar = [1, 5, 6, 3, 7, 6, 41, 21, 65, 2, 12, 35, 64, 346, 54, 2, 44]

// function insertion_sort(arr) {
//     for (let i=1; i<arr.length; i++) {
//         while (arr[i] < arr[i-1] && i > 0){
//                 // swap
//                 // move i down, compare
//                 temp = arr[i - 1]
//                 arr[i - 1] = arr[i]
//                 arr[i] = temp
//                 i--
//         }
//     }
//     return arr
// }

// console.log(insertion_sort(ar), 'insertion')

// function selection_sort(arr) {
//     let len = arr.length
//     for (let i=0; i<len; i++) {
//         let smallest = i
       
//         for (let j=i+1; j<len; j++) {
//             if (arr[smallest] > arr[j]) {
//                 smallest = j;
//             }
//         }       
//         if (smallest !== i) {
//             let tmp = arr[i];
//             arr[i] = arr[smallest];
//             arr[smallest] = tmp;
//         }
//     }

//     return arr
// }
// console.log(selection_sort(ar))

// function mergeHelper(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     let result = [];
    
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i])
//             i++
//         }
//         else {
//             result.push(arr2[j])
//             j ++
//         }
//     }
//     while (i < arr1.length) {
//         result.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length) {
//         result.push(arr2[j])
//         j++
//     }
    
//     return result
// }

// const arr1 = [1, 3, 4, 12, 24]
// const arr2 = [7, 9, 11, 12, 15]

// // console.log(mergeHelper(arr1, arr2))

// function mergeSort(arr) {
//     // base case 
//     let midpoint = arr.length / 2

//     if (arr.length > 1) {
//         let left = mergeSort(arr.slice(0, midpoint))
//         console.log(left, 'left')
//         let right = mergeSort(arr.slice(midpoint))
//         console.log(right, 'right')
//         arr = mergeHelper(left, right)
//     }
    
//     return arr
// }

// console.log(mergeSort(ar))


// function rotateArray(arr, k) {
//     // rotate array k steps
//     // divide into left and right sides and combine them
//     // arr.unshift(...arr.splice(-k, k))
//     let left = arr.slice(-k)
//     let right = arr.slice(0, -k)
//     return [...left, ...right]
//     // return arr
// }

// console.log(rotateArray([1, 2, 3], 2))

// function containsDuplicates(arr) {
//     let hash = {}
//     for (let i=0; i<arr.length; i++) {
//         if (hash[arr[i]]) {
//             return true
//         }
//         hash[arr[i]] = true
//     }
//     return false
   
// }
// var hasDuplicates = function(nums) {
//     if (nums.length < 2) {
//         return false
//     }
//     nums.sort()
    
//     for (let i=1; i<=nums.length; i++) {
//         if (nums[i] == nums[i - 1]) {
//             return true
//         }
//     }
//     return false
// };
// console.log(containsDuplicates([1, 2, 3, 3, 4, 6, 7, 8, 9, 10, 23, 'a', 'c']))

// function findSingleEl(arr) {
//     const hash = {}
//     for (let i=0; i<arr.length; i++) {
//         hash[arr[i]] = null
//     }
//     console.log(hash)
//     for (let j=0; j<arr.length; j++) {
//         hash[arr[j]] += 1
//     }
//     console.log(hash)
//     return Object.keys(hash).find(k => hash[k] == 1) // look through object and find key where value == 1
// }

// var singleNumber = function(nums) {
//     const obj = {}
//     for (let n of nums) {
//         if (obj[n] == null) {
//             obj[n] = 0
//         }
//         obj[n]++;
//     }
//      for (let n in obj) {
//          if (obj[n] === 1) {
//              return Number(n)
//          }
//      }
//  };
 
// console.log(findSingleEl([1, 1, 2, 2, 3, 3, 4, 5, 5]))



// var intersect = function(nums1, nums2) {
//     const hash = {}
//     let result = []
//     for (let i=0; i<nums1.length; i++) {
//         if (hash[nums1[i]] == null) {
//             hash[nums1[i]] = 1
//         } else {
//             hash[nums1[i]]++
//         }
//     }
//     console.log(hash)
//     for (let i=0; i<nums2.length; i++) {
//         if (hash[nums2[i]] > 0) {
//            result.push(nums2[i])
//            hash[nums2[i]] --
//         }
//     }
//     console.log(hash)
//     return result
// };

// console.log(intersect([4, 9, 5, 7, 7], [7, 7, 9, 4, 9, 8, 4]))

// function plusOne(arr) {
//     for (let i=arr.length - 1; i>=0; i--) {
//         if (arr[i] < 9) {
//             arr[i] = arr[i] + 1
//             return arr
//         } else {
//             arr[i] = 0
//         }
//     }
//     console.log(arr)
//     arr.unshift(1) // only gets called if first index == 9
//     return arr
// }
// console.log(plusOne([9, 9]))

var moveZeroes = function(nums) {
    for (let i=nums.length - 1; i>=0; i--) {
        console.log(nums)
        if (nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1)
        }
    }
    return nums
};

// console.log(moveZeroes([0,1,0,3,12]))


var twoSum = function(nums, target) {
    // for (let i=0; i<nums.length; i++) {
    //     for (let j=1; j<nums.length; j++) {
    //         if (nums[i] + nums[j] == target && i !== j) {
    //             return [i, j]
    //         }
    //     }
    // }

    const hash = {}

    for (let i=0; i<nums.length; i++) {
        const complement = target - nums[i]
        
        if (complement in hash) {
            return [hash[complement], i]
        } else {
            hash[nums[i]] = i
        }
    }

};


const matrix = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
]

var rotate = function(matrix) {
    n = matrix.length - 1
    for (let r=0; r<=n; r++) {
        for (let c=r; c<=n; c++) {
            temp = matrix[r][c]
            matrix[r][c] = matrix[c][r]
            matrix[c][r] = temp
        }
    }
    

    const mid = (n + 1) / 2

    for (let i=0; i<=n; i++) {
        j = n
        k = 0
        while (j >= mid) {
            temp = matrix[i][j]
            matrix[i][j] = matrix[i][k]
            matrix[i][k] = temp
            j--
            k++
        }
    }

    console.log(matrix)
};

console.log(rotate(matrix))