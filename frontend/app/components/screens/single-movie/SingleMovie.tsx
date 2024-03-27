import React, { FC } from 'react'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import Meta from '@/utils/meta/Meta'
import Banner from '@/components/ui/banner/Banner'
import SubHeading from '@/components/ui/heading/SubHeading'
import Gallery from '@/components/ui/gallery/Gallery'
import Content from './Content/Content'
import VideoPlayer from '@/components/ui/video-player/VideoPlayer'
import dynamic from 'next/dynamic'
import { useUpdateCountOpened } from './useUpdateCountOpened'
const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})
const DynamicRateMovie = dynamic(() => import('@/components/screens/single-movie/RateMovie/RateMovie'), {
	ssr: false,
})
const SingleMovie: FC<IMoviePage> = ({ similarMovies, movie }) => {
	movie && useUpdateCountOpened(movie.slug)
	return (
		movie && (
			<Meta
				description={`Watch ${movie?.title}`}
				title={movie ? movie.title : 'Movie not found'}
			>
				<Banner
					image={movie ? movie?.bigPoster : ''}
					Detail={() => <Content movie={movie} />}
				/>

				{/* Video Player */}
				<DynamicPlayer slug={movie?.slug} videoSource={movie.videoUrl} />
				{/* Video Player */}
				<div className="mt-12">
					<SubHeading title="Similar Movies" />
					<Gallery items={similarMovies} />
				</div>
				{/* Rating */}
				<DynamicRateMovie slug={movie.slug} id={movie._id}/>
				{/* Rating */}
			</Meta>
		)
	)
}

export default SingleMovie
