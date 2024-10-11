import Collections from '@/components/screens/collections/Collections'
import { ICollection } from '@/components/screens/collections/collections.interface'
import Catalog from '@/components/ui/catalog-movies/Catalog'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Custom404 from './404'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collections collections={collections || []} />
	) : (
		<Custom404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: {
				collections,
			},
			revalidate: 60,

		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default GenresPage
