import React, { FC } from 'react'
import styles from './SlideArrow.module.scss'
import cn from 'classnames'
import { MaterialIcon } from '../../MaterialIcon'
interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}
const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
            <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
        </button>
	)
}

export default SlideArrow
