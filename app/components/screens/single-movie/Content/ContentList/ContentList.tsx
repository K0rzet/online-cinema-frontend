import React, { FC, Fragment } from 'react'
import { IContentList } from '../content.interface'
import styles from './ContentList.module.scss'
import Link from 'next/link'
const ContentList: FC<IContentList> = ({ links, name }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}</div>
			<div className={styles.links}>
				{links.map((link, idx) => (
					<Fragment key={idx}>
						<Link href={link.link}>{link.title}</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
