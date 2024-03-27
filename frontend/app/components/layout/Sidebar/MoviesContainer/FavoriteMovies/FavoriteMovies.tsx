import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import NotAuthFavorites from './NotAuthFavorites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import MovieList from '../MovieList'

const FavoriteMovies: FC = () => {
	const { user } = useAuth()
	const { isLoading, favoriteMovies } = useFavorites()
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : user ? (
		<MovieList
			link="/favorites"
			movies={favoriteMovies?.slice(0, 3) || []}
			title="Favorites"
		/>
	) : (
		<NotAuthFavorites />
	)
}

export default FavoriteMovies
