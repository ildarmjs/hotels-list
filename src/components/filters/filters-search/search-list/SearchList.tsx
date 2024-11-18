import { Card, Checkbox, List, Typography } from 'antd'
import { FC } from 'react'
import { useHotelContext } from '../../../../context/HotelsContext'
const { Text } = Typography
interface ISearchListProps {}

const SearchList: FC<ISearchListProps> = () => {
	const { hotels, searchTerm, selectedCountries, setSelectedCountries } =
		useHotelContext()
	const uniqueCountries = Array.from(
		new Set(hotels.map(hotel => hotel.country))
	)
	return (
		<Card>
			<List>
				{(searchTerm
					? uniqueCountries.filter(country =>
							country.toLowerCase().includes(searchTerm.toLowerCase())
					  )
					: uniqueCountries
				).map(country => (
					<List.Item key={country}>
						<Checkbox
							checked={selectedCountries.includes(country)}
							onChange={() => {
								if (selectedCountries.includes(country)) {
									setSelectedCountries(
										selectedCountries.filter(c => c !== country)
									)
								} else {
									setSelectedCountries([...selectedCountries, country])
								}
							}}
						>
							{country}
						</Checkbox>
					</List.Item>
				))}
				{searchTerm &&
					!uniqueCountries.some(country =>
						country.toLowerCase().includes(searchTerm.toLowerCase())
					) && (
						<List.Item>
							<Text type='secondary'>
								К сожалению, по вашему запросу ничего не найдено :(
							</Text>
						</List.Item>
					)}
			</List>
		</Card>
	)
}

export default SearchList
