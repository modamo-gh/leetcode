const plusOne = (digits) => {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] != 9) {
			digits[i] += 1;

			return digits;
		} else {
			digits[i] = 0;

			if (i - 1 > 0 && digits[i - 1] != 9) {
				digits[i - 1] += 1;

				return digits;
			} else if (i - 1 < 0) {
				digits.unshift(1);

				return digits;
			}
		}
	}
};

console.log(plusOne([9, 8, 9]));
