import React, { FC } from 'react'
import { useFavorites } from './useFavorites'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import styles from './Favorites.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import FavoriteItem from './FavoriteItem'
import { useAuth } from '@/hooks/useAuth'
const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()
	const { user } = useAuth()
	if (!user) return null
	return (
		<Meta title="Favorites">
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
