import { FC } from 'react'
import { Button, Card, Flex, Image, Typography } from 'antd'
import { HotelsCard } from './hotels-card/HotelsCard'
import { useHotelContext } from '../../context/HotelsContext'
import notFoundImage from '/public/image/not-found.png'
const { Title, Text } = Typography

export const HotelsList: FC = () => {
	const { filteredHotels, clearFilters } = useHotelContext()
	return (
		<div style={{ height: '100vh' }}>
			{filteredHotels.length === 0 ? (
				<Card>
					<Flex justify='center' align='center' vertical>
						<Image src={notFoundImage} preview={false} />
						<Title level={4}>По данным параметрам ничего не найдено</Title>
						<Text type='secondary'>
							Попробуйте изменить параметры фильтрации или вернуться в общий
							каталог
						</Text>
						<br />
						<Button onClick={clearFilters} type='primary'>
							Очистить фильтр
						</Button>
					</Flex>
				</Card>
			) : (
				filteredHotels.map(hotel => (
					<HotelsCard key={hotel.name} hotel={hotel} />
				))
			)}
		</div>
	)
}
