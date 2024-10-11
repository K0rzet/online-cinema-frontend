import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { GetStaticProps, NextPage } from 'next'
import { MovieService } from '@/services/movie.service'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import { getGenresList } from '@/utils/movie/getGenresList'
import { ISlide } from '@/components/ui/slider/slider.interface'
import { errorCatch } from 'api/api.helpers'
import { ActorService } from '@/services/actor.service'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<main
			className={`flex min-h-screen flex-col items-center w-full ${inter.className}`}
		>
			<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
		</main>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const { data: dataActors } = await ActorService.getAll()
		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
			revalidate: 60,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
