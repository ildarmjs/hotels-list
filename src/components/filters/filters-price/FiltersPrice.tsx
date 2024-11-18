import { Flex, InputNumber, Slider, Typography } from 'antd'
import { FC, useCallback } from 'react'
import { useHotelContext } from '../../../context/HotelsContext'
import styles from './FiltersPrice.module.scss'

const { Title } = Typography

const MIN_PRICE = 0
const MAX_PRICE = 100000
const STEP = 100

const FiltersPrice: FC = () => {
	const { priceRange, setPriceRange } = useHotelContext()

	const handlePriceChange = useCallback(
		(index: 0 | 1) => (value: number | null) => {
			setPriceRange(prevRange => {
				const newValue = value ?? (index === 0 ? MIN_PRICE : MAX_PRICE)
				const clampedValue = Math.max(MIN_PRICE, Math.min(newValue, MAX_PRICE))

				if (index === 0) {
					return [Math.min(clampedValue, prevRange[1]), prevRange[1]]
				} else {
					return [prevRange[0], Math.max(clampedValue, prevRange[0])]
				}
			})
		},
		[setPriceRange]
	)

	return (
		<div>
			<Title level={4}>Цена</Title>
			<Flex gap={20}>
				<InputNumber
					placeholder={`от ${MIN_PRICE} ₽`}
					min={MIN_PRICE}
					max={priceRange[1]}
					value={priceRange[0]}
					onChange={handlePriceChange(0)}
					className={styles.input}
				/>
				<InputNumber
					placeholder={`до ${MAX_PRICE} ₽`}
					min={priceRange[0]}
					max={MAX_PRICE}
					value={priceRange[1]}
					onChange={handlePriceChange(1)}
					className={styles.input}
				/>
			</Flex>

			<Slider
				range
				value={priceRange}
				onChange={(newValue: number[]) => setPriceRange(newValue)}
				min={MIN_PRICE}
				max={MAX_PRICE}
				step={STEP}
				className={styles.slider}
			/>
		</div>
	)
}

export default FiltersPrice
