import { Card, Checkbox, Typography } from 'antd'
import { FC } from 'react'
import { getStarLabel } from '../../../utils/getStarLabel'
import { useHotelContext } from '../../../context/HotelsContext'
import styles from './FiltersStars.module.scss'
const { Title } = Typography

const FiltersStars: FC = () => {
	const { stars, setStars } = useHotelContext()
	return (
		<div className={styles.field}>
			<Title level={4}>Количество звезд</Title>
			<Card>
				{[1, 2, 3, 4, 5].map(star => (
					<div key={star} className={styles.checkboxes}>
						<Checkbox
							checked={stars.includes(star)}
							onChange={() => {
								if (stars.includes(star)) {
									setStars(stars.filter(s => s !== star))
								} else {
									setStars([...stars, star])
								}
							}}
						>
							{star} {getStarLabel(star)}
						</Checkbox>
					</div>
				))}
			</Card>
		</div>
	)
}

export default FiltersStars
