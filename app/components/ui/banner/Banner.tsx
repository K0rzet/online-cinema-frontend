import React, { FC } from 'react'
import styles from './/Banner.module.scss'
import Image from 'next/image'
interface IBanner {
	image: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
				alt=""
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
