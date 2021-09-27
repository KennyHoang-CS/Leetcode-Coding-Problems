/**
 * @param {number[]} arr
 * @return {boolean}
 */

// https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function(arr) {
    
    // making frequency object is O(N). 
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++; 
        } else {
            obj[arr[i]] = 1;
        }
    }
    
    // traversing the freq. obj to make a set is O(N)
    let mySet = new Set(); 
    for (const key in obj) {
        if (mySet.has(obj[key])) {
            return false; 
        }
        else {
            mySet.add(obj[key]);
        }
    }
    
    return true; 
};

// time complexity: O(N) + O(N) = O(N)