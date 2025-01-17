import React, { FC } from 'react'
import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={item.link}
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				alt={item.name}
				src={item.posterPath}
				layout="fill"
				draggable={false}
				priority
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={styles.subTitle}>{item.content.subTitle}</div>
					)}
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
