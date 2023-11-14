/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let occurrences = {}
  let goodPair = 0;

  for ( let num of nums ) {
      if ( occurrences[num] ) {
          goodPair += occurrences[num]

          occurrences[num]++
      }
      else {
          occurrences[num] = 1
      }
  }
  return goodPair
};


console.log(numIdenticalPairs([1,2,3,1,4,2,5,3,4,6,5,7,6,8,7,9,8]))