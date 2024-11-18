import React from 'react'
import { Button, Card, Flex, Image, Space, Typography } from 'antd'
import { Rate } from 'antd'
import { Hotels } from '../../../types/hotels'
import iconLocation from '/public/icons/location.svg'
import { getReviewsAmount } from '../../../utils/getReviewsAmount'
const { Title, Text } = Typography

interface HotelCardProps {
	hotel: Hotels
}

export const HotelsCard: React.FC<HotelCardProps> = ({ hotel }) => {
	return (
		<Card style={{ marginBottom: '20px' }}>
			<Flex align='center' justify='space-between'>
				<Title level={2}>{hotel.name}</Title>
				<Space direction='vertical'>
					<div>
						<Text style={{ fontSize: '30px' }} strong>
							{hotel.min_price}₽
						</Text>
						<div>Цена за 1 ночь</div>
					</div>

					<Button size={'large'}>Забронировать</Button>
				</Space>
			</Flex>

			<Flex align='center' gap={10}>
				<Rate disabled defaultValue={hotel.rating} />
				<Text type='secondary'> {hotel.type}</Text>
				<Text type='secondary'>
					{hotel.reviews_amount} {getReviewsAmount(hotel.reviews_amount)}
				</Text>

				<Text>
					<Image src={iconLocation} /> {hotel.country}
				</Text>
			</Flex>

			<br />
			<Text>{hotel.description}</Text>
		</Card>
	)
}
