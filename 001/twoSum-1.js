const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const numCounterpart = target - num;

        if(nums.includes(numCounterpart)){
            const alteredNums = [...nums];
            alteredNums[i] = null;
            if(alteredNums.includes(numCounterpart)){
                return [nums.indexOf(num), alteredNums.indexOf(numCounterpart)];
            }
        }
    }
}

console.log(twoSum([3, 3], 6));