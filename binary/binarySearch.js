let nums = [1, 2, 3, 4, 5]

// recursive solution
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid = Math.floor(nums.length / 2)
    console.log(mid)
    
    if (nums[mid] === target) return true;
    if (target < nums[mid]) {
      // run binary search on the lower half
        return search(nums.slice(0, mid), target)
    }
    else if (target > nums[mid]) {
        // run binary search on the upper half
        return search(nums.slice(mid + 1), target)
    }
      return false
  };

  // iterative solution
  var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid = Math.floor((nums.length / 2));
    
    while (low <= high) {
        mid = Math.floor((high - low / 2))
       
      if (nums[mid] === target) return mid;
        
      else if (target < nums[mid]) {
        // run binary search on the lower half
          high = mid - 1;
      }
      else if (target > nums[mid]) {
          // run binary search on the upper half
          low = mid + 1
      }
    }
      return -1
  };