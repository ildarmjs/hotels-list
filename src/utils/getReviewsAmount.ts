export const getReviewsAmount = (review: number) => {
	if (review === 1) {
		return 'отзыв'
	} else if (review > 1 && review < 5) {
		return 'отзыва'
	} else {
		return 'отзывов'
	}
}