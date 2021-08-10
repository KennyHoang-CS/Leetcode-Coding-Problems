/*
    Problem: Given 32bit integers, for each pair, multiply the pair, count the 
        number of zeroes, and return the result. 
*/
function countZeroes(nums) {

    let counter = 0; 
    // traverse the array.
    for (let i = 0; i < nums.length; i++) {
        // for each pair, multiply that and store that into an accumulator. 
        for (let j = i + 1; j < nums.length; j++) {
            counter += nums[i] * nums[j];
        }
    }

    // return the accumulator. 
    return counter;
}

console.log(countZeroes([1, 2, 3]));