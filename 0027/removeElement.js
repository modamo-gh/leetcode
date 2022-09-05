const removeElement = (nums, val) => {
	for (let i = nums.length; i >= 0; i--) {
		if (nums[i] === val) {
			nums.splice(i, 1);
		}
	}

	return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
