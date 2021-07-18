/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    
    let nums1Obj = {}; 
    let nums2Obj = {}; 
    let answer = []; 
    
    // make a frequency counter of nums1.
    for (let i = 0; i < nums1.length; i++) {
        if (nums1Obj[nums1[i]]) {
            nums1Obj[nums1[i]] += 1;
        } else {
            nums1Obj[nums1[i]] = 1; 
        }
    }
    
    // make a frequency counter of nums2. 
    for (let i = 0; i < nums2.length; i++) {
        if (nums2Obj[nums2[i]]) {
            nums2Obj[nums2[i]] += 1;
        } else {
            nums2Obj[nums2[i]] = 1; 
        }
    }
    
    // process
    let keySize; 
    for (const key in nums1Obj) {
        if (nums2Obj[key]) {
            if (nums2Obj[key] <= nums1Obj[key]) {
                keySize = nums2Obj[key];
            } else {
                keySize = nums1Obj[key];
            }
            for (let i = 0; i < keySize; i++) {
                answer.push(+key); 
            }
        }
    }
    
    return answer; 
};
