import React, { useState } from 'react'
import { Button, Card, Flex, Image, Space, Typography } from 'antd'
import { Rate } from 'antd'
import { Hotels } from '../../../types/hotels'
import iconLocation from '/public/icons/location.svg'
import { getReviewsAmount } from '../../../utils/getReviewsAmount'
import styles from '../HotelsList.module.scss'
const { Title, Text } = Typography

interface HotelCardProps {
	hotel: Hotels
}

export const HotelsCard: React.FC<HotelCardProps> = ({ hotel }) => {
	const [isBooked, setIsBooked] = useState(false)

	const handleBooking = () => {
		setIsBooked(true)
	}
	return (
		<Card className={styles.card}>
			<Flex align='center' justify='space-between'>
				<Title level={2}>{hotel.name}</Title>
				<Space direction='vertical'>
					<div>
						<Text className={styles.textPrice} strong>
							{hotel.min_price}₽
						</Text>
						<div>Цена за 1 ночь</div>
					</div>

					<Button
						size={'large'}
						onClick={handleBooking}
						type={isBooked ? 'default' : 'primary'}
						disabled={isBooked ? true : false}
					>
						{isBooked ? 'Забронировано' : 'Забронировать'}
					</Button>
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
