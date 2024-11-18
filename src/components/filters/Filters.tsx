import { FC } from 'react'
import FiltersSearch from './filters-search/FiltersSearch'
import FiltersType from './filters-type/FiltersType'
import FiltersStars from './filters-stars/FiltersStars'
import FiltersPrice from './filters-price/FiltersPrice'
import FiltersBtns from './filters-btns/FiltersBtns'

export const Filters: FC = () => {
	return (
		<div>
			<FiltersSearch />
			<FiltersType />
			<FiltersStars />
			<FiltersPrice />
			<FiltersBtns />
		</div>
	)
}
