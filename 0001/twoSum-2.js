const twoSum = (nums, target) => {
    const numsLength = nums.length;
    const numberIndices = {};
    
    for(let i = 0; i < numsLength; i++){
        const numCounterpart = target - nums[i];

        if(Object.keys(numberIndices).includes(numCounterpart.toString())){
            return [i, nums.indexOf(numCounterpart)];
        }
        else {
            numberIndices[nums[i]] = i;
        }
    }
}

console.log(twoSum([2,7,11,15], 9));