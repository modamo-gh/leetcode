const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i === j){
                continue;
            }
            else{
                if(nums[i] + nums[j] === target){
                    return [i, j];
                }
            }
        }
    }
}

console.log(twoSum([3, 3], 6));