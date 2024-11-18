export const getStarLabel = (count: number) => {
	if (count === 1) {
		return 'звезда';
	} else if (count > 1 && count < 5) {
		return 'звезды';
	} else {
		return 'звезд';
	}
};