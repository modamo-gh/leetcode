const searchInsertPosition = (sortedIntegerArray, targetInteger) => {
	let middleIntegerIndex = Math.floor(sortedIntegerArray.length / 2);
	let targetIntegerFound = false;

	while (!targetIntegerFound) {
		if (sortedIntegerArray[middleIntegerIndex] === targetInteger) {
			return middleIntegerIndex;
		} else if (sortedIntegerArray[middleIntegerIndex] > targetInteger) {
			middleIntegerIndex = Math.floor(middleIntegerIndex / 2);
		} else if (sortedIntegerArray[middleIntegerIndex] < targetInteger) {
			middleIntegerIndex = Math.floor(
				(middleIntegerIndex + sortedIntegerArray.length) / 2
			);
		}
	}
};

console.log(searchInsertPosition([1, 3, 5, 6, 7], 0));
