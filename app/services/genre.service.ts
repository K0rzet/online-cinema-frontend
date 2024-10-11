import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.inrerface'
import { ICollection } from '@/components/screens/collections/collections.interface'
import { getGenresUrl } from '@/configs/api.config'
import { getGenreUrl } from '@/configs/url.config'
import { IGenre } from '@/shared/types/movie.types'
import { axiosClassic } from 'api/interceptors'
import axios from 'api/interceptors'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},
	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl(`/collections`))
	},

	async create() {
		return axios.post<string>(getGenresUrl(`/`))
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},


}
