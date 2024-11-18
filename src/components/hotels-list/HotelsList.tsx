import { FC, useState } from 'react'
import { useHotelContext } from '../../context/HotelsContext'
import { HotelsCard } from './hotels-card/HotelsCard'
import { NoHotelsFound } from '../no-hotels-found/NoHotelsFound'
import { PaginationControls } from '../pagination-controls/PagintaionControls'

const PAGE_SIZE = 3

export const HotelsList: FC = () => {
	const { filteredHotels, clearFilters } = useHotelContext()
	const [currentPage, setCurrentPage] = useState(1)

	const indexOfLastHotel = currentPage * PAGE_SIZE
	const indexOfFirstHotel = indexOfLastHotel - PAGE_SIZE
	const currentHotels = filteredHotels.slice(
		indexOfFirstHotel,
		indexOfLastHotel
	)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	return (
		<div style={{ height: '100vh' }}>
			{filteredHotels.length === 0 ? (
				<NoHotelsFound onClearFilters={clearFilters} />
			) : (
				<>
					{currentHotels.map(hotel => (
						<HotelsCard key={hotel.name} hotel={hotel} />
					))}
					<PaginationControls
						currentPage={currentPage}
						total={filteredHotels.length}
						onPageChange={handlePageChange}
					/>
				</>
			)}
		</div>
	)
}
