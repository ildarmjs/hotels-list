import { FC } from 'react'
import { Pagination, Flex } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './PaginationControl.module.scss'

interface PaginationControlsProps {
	pageSize: number
	currentPage: number
	total: number
	onPageChange: (page: number) => void
}

export const PaginationControls: FC<PaginationControlsProps> = ({
	currentPage,
	total,
	onPageChange,
	pageSize
}) => {
	const itemRender = (
		_: number,
		type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
		originalElement: React.ReactNode
	) => {
		if (type === 'prev') {
			return (
				<a className={styles.link}>
					<LeftOutlined /> Назад
				</a>
			)
		}
		if (type === 'next') {
			return (
				<a className={styles.link}>
					Следующая <RightOutlined />
				</a>
			)
		}
		return originalElement
	}

	return (
		<Flex justify='center' className={styles.pagination}>
			<Pagination
				current={currentPage}
				total={total}
				pageSize={pageSize}
				onChange={onPageChange}
				showSizeChanger={false}
				showQuickJumper={false}
				showLessItems
				itemRender={itemRender}
			/>
		</Flex>
	)
}
