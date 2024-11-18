import {
	createContext,
	useContext,
	useState,
	ReactNode,
	SetStateAction
} from 'react'
import hotelsData from '../data/hotels.json'
import { Hotels } from '../types/hotels'

interface HotelContextType {
	hotels: Hotels[]
	filteredHotels: Hotels[]
	searchTerm: string
	selectedCountries: string[]
	types: string[]
	stars: number[]
	reviewsCount: number | null
	priceRange: number[]
	applyFilters: () => void
	clearFilters: () => void
	setSearchTerm: (term: string) => void
	setSelectedCountries: (countries: string[]) => void
	setTypes: (types: string[]) => void
	setStars: (stars: number[]) => void
	setReviewsCount: (count: number | null) => void
	setPriceRange: React.Dispatch<SetStateAction<number[]>>
}

const HotelContext = createContext<HotelContextType | undefined>(undefined)

export const HotelProvider = ({ children }: { children: ReactNode }) => {
	const [hotels] = useState<Hotels[]>(hotelsData.hotels)
	const [filteredHotels, setFilteredHotels] = useState<Hotels[]>(hotels)
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [selectedCountries, setSelectedCountries] = useState<string[]>([])
	const [types, setTypes] = useState<string[]>([])
	const [stars, setStars] = useState<number[]>([])
	const [reviewsCount, setReviewsCount] = useState<number | null>(null)
	const [priceRange, setPriceRange] = useState<number[]>([0, 100000])

	const applyFilters = () => {
		let filtered = hotels

		if (selectedCountries.length > 0) {
			filtered = filtered.filter(hotel =>
				selectedCountries.includes(hotel.country)
			)
		}
		if (types.length > 0) {
			filtered = filtered.filter(hotel => types.includes(hotel.type))
		}
		if (stars.length > 0) {
			filtered = filtered.filter(hotel => stars.includes(hotel.stars))
		}
		if (reviewsCount !== null) {
			filtered = filtered.filter(hotel => hotel.reviews_amount >= reviewsCount)
		}
		filtered = filtered.filter(
			hotel =>
				hotel.min_price >= priceRange[0] && hotel.min_price <= priceRange[1]
		)

		setFilteredHotels(filtered)
	}

	const clearFilters = () => {
		setSearchTerm('')
		setSelectedCountries([])
		setTypes([])
		setStars([])
		setReviewsCount(null)
		setPriceRange([0, 100000])
		setFilteredHotels(hotels)
	}

	return (
		<HotelContext.Provider
			value={{
				hotels,
				filteredHotels,
				searchTerm,
				selectedCountries,
				types,
				stars,
				reviewsCount,
				priceRange,
				applyFilters,
				clearFilters,
				setSearchTerm,
				setSelectedCountries,
				setTypes,
				setStars,
				setReviewsCount,
				setPriceRange
			}}
		>
			{children}
		</HotelContext.Provider>
	)
}

export const useHotelContext = () => {
	const context = useContext(HotelContext)
	if (!context) {
		throw new Error('useHotelContext must be used within a HotelProvider')
	}
	return context
}
