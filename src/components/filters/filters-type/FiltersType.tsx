import { Card, Checkbox, Typography } from 'antd'
import { FC } from 'react'
import { useHotelContext } from '../../../context/HotelsContext'
import styles from './FiltersType.module.scss'
const { Title } = Typography

const FiltersType: FC = () => {
	const { hotels, types, setTypes } = useHotelContext()
	const uniqueTypes = Array.from(new Set(hotels.map(hotel => hotel.type)))
	return (
		<div>
			<Title level={4}>Тип</Title>
			{uniqueTypes.map(type => (
				<Card key={type} className={styles.card}>
					<Checkbox
						checked={types.includes(type)}
						onChange={() => {
							if (types.includes(type)) {
								setTypes(types.filter(t => t !== type))
							} else {
								setTypes([...types, type])
							}
						}}
					>
						{type}
					</Checkbox>
				</Card>
			))}
		</div>
	)
}

export default FiltersType
