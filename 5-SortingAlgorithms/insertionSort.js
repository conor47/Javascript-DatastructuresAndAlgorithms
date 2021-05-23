// implementation of insertion sort

function insertionSort(nums) {
  if (nums[1] < nums[0]) {
    [nums[0], nums[1]] = [nums[1], nums[0]];
  }

  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
}

console.log(insertionSort([12, 83, -1, 313, -212]));
