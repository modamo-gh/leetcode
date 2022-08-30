const mergeTwoSortedLists = (list1, list2) => {
	const mergedList = [];
	const mergedListLength = list1.length + list2.length;
	let list1Pointer = 0;
	let list2Pointer = 0;

	for (let i = 0; i < mergedListLength; i++) {
		if (list1[list1Pointer] <= list2[list2Pointer]) {
			mergedList.push(list1[list1Pointer]);
			list1Pointer++;
		} else {
			mergedList.push(list2[list2Pointer]);
			list2Pointer++;
		}
	}

	return mergedList;
};

console.log(mergeTwoSortedLists([], [0]));
