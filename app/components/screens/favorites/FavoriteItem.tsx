import { IMovie } from '@/shared/types/movie.types'
import React, { FC } from 'react'
import styles from './Favorites.module.scss'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'
import Link from 'next/link'
import { getMovieUrl } from '@/configs/url.config'
import Image from 'next/image'
import { useAuth } from '@/hooks/useAuth'
const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={movie._id} />}
			<Link href={getMovieUrl(movie.slug)} className={styles.item}>
				<Image
					alt={movie.title}
					src={movie.bigPoster}
					layout="fill"
					draggable={false}
					priority
				/>
				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
