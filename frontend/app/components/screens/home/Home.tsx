import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { IHome } from './home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'
import Slider from '@/components/ui/slider/Slider'
import SubHeading from '@/components/ui/heading/SubHeading'
import GalleryItem from '@/components/ui/gallery/GalleryItem'
import Gallery from '@/components/ui/gallery/Gallery'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies Online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}

			<div className="my-10 w-full">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>
			<div className="my-10 w-full">
				<SubHeading title="Best Actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
