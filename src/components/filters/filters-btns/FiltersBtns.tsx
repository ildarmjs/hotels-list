import { Button } from 'antd'
import { FC } from 'react'
import { useHotelContext } from '../../../context/HotelsContext'
import { CloseOutlined } from '@ant-design/icons'
import styles from './FiltersBtns.module.scss'

const FiltersBtns: FC = () => {
	const { applyFilters, clearFilters } = useHotelContext()
	return (
		<div className={styles.btns}>
			<Button type='primary' onClick={applyFilters} className={styles.btn}>
				Применить фильтр
			</Button>
			<Button onClick={clearFilters} className={styles.btn}>
				<CloseOutlined />
				Очистить фильтр
			</Button>
		</div>
	)
}

export default FiltersBtns
