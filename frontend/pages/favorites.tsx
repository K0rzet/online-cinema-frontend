import Favorites from '@/components/screens/favorites/Favorites'
import { IMovie } from '@/shared/types/movie.types'
import { NextPage } from 'next'
import React from 'react'

const FavoritesPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return <Favorites />
}

export default FavoritesPage
