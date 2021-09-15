// 数组 [3,1,2,5,4,9,7,2]

/**
 * x x 3 1 2 5 4 9
 * ----------------------
 * 7 2 x x x x x x
 * ----------------------
 *
 * ----------------------
 */

// 读取和更新的复杂度都为 O(1)
const arr = [3, 1, 2, 5, 4, 9, 7, 2];

console.log(arr[9]);

// 3 1 2 5 4 9 x x
// 0 1 2 3 4 5 6 7