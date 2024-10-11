import React, { FC } from 'react'
import { ICollection } from './collections.interface'
import Link from 'next/link'
import { getGenreUrl } from '@/configs/url.config'
import styles from './Collections.module.scss'
import cn from 'classnames'
import CollectionImage from './CollectionImage'
const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link href={getGenreUrl(collection.slug)} className={styles.collection}>
			<div className={cn(styles.behind, styles.third)}>
				<CollectionImage collection={collection} />
			</div>
			<div className={cn(styles.behind, styles.second)}>
				<CollectionImage collection={collection} />
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{collection.title}</div>
			</div>
            <CollectionImage collection={collection} />
		</Link>
	)
}

export default CollectionItem
