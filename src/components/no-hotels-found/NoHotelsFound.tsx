import { FC } from 'react'
import { Button, Card, Flex, Image, Typography } from 'antd'
import notFoundImage from '/public/image/not-found.png'

const { Title, Text } = Typography

interface NoHotelsFoundProps {
	onClearFilters: () => void
}

export const NoHotelsFound: FC<NoHotelsFoundProps> = ({ onClearFilters }) => {
	return (
		<Card>
			<Flex justify='center' align='center' vertical>
				<Image src={notFoundImage} preview={false} />
				<Title level={4}>По данным параметрам ничего не найдено</Title>
				<Text type='secondary'>
					Попробуйте изменить параметры фильтрации или вернуться в общий каталог
				</Text>
				<br />
				<Button onClick={onClearFilters} type='primary'>
					Очистить фильтр
				</Button>
			</Flex>
		</Card>
	)
}
