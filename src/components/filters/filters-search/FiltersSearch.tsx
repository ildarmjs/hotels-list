import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { FC } from 'react'
import SearchList from './search-list/SearchList'
import { useHotelContext } from '../../../context/HotelsContext'
import styles from './FiltersSearch.module.scss'

const FiltersSearch: FC = () => {
	const { searchTerm, setSearchTerm } = useHotelContext()

	return (
		<>
			<div className={styles.field}>
				<SearchOutlined className={styles.iconSearch} />
				<Input
					className={styles.input}
					placeholder='Поиск стран'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				{searchTerm.length > 0 && (
					<CloseOutlined
						className={styles.iconClose}
						onClick={() => setSearchTerm('')}
					/>
				)}
			</div>
			<SearchList />
		</>
	)
}

export default FiltersSearch
