import { Input, Typography } from 'antd'
import { FC } from 'react'
import { useHotelContext } from '../../../context/HotelsContext'
const { Title } = Typography
const FiltersReviewsAmount: FC = () => {
	const { reviewsCount, setReviewsCount } = useHotelContext()
	return (
		<div>
			<Title level={4}>Количество отзывов (от)</Title>
			<Input
				type='number'
				placeholder='Минимальное количество отзывов'
				value={reviewsCount || ''}
				onChange={e =>
					setReviewsCount(e.target.value ? parseInt(e.target.value) : null)
				}
				style={{ marginBottom: '20px' }}
			/>
		</div>
	)
}

export default FiltersReviewsAmount
