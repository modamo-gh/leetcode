const searchInsertPosition = (sortedIntegerArray, targetInteger) => {
	let leftPointer = 0;
	let rightPointer = sortedIntegerArray.length - 1;
	let middleIntegerIndex = Math.floor((rightPointer + leftPointer) / 2);

	while (leftPointer <= rightPointer) {
		if (sortedIntegerArray[middleIntegerIndex] === targetInteger) {
			return middleIntegerIndex;
		} else if (sortedIntegerArray[middleIntegerIndex] < targetInteger) {
			leftPointer = middleIntegerIndex + 1;
			middleIntegerIndex = Math.floor((rightPointer + leftPointer) / 2);
		} else if (sortedIntegerArray[middleIntegerIndex] > targetInteger) {
			rightPointer = middleIntegerIndex - 1;
			middleIntegerIndex = Math.floor((rightPointer + leftPointer) / 2);
		}
	}

	return leftPointer;
};

console.log(searchInsertPosition([1, 3, 5, 6], 7));
