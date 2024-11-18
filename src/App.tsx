import { FC } from 'react'
import { Row, Col } from 'antd'
import { Filters } from './components/filters/Filters'
import { HotelsList } from './components/hotels-list/HotelsList'
import { HotelProvider } from './context/HotelsContext'

const App: FC = () => {
	return (
		<HotelProvider>
			<Row gutter={16} style={{ padding: '20px' }}>
				<Col span={4}>
					<Filters />
				</Col>
				<Col span={18}>
					<HotelsList />
				</Col>
			</Row>
		</HotelProvider>
	)
}

export default App
