import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.inrerface'
import { getActorsUrl } from '@/configs/api.config'
import { getActorUrl } from '@/configs/url.config'
import { IActor } from '@/shared/types/movie.types'
import { axiosClassic } from 'api/interceptors'
import axios from 'api/interceptors'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async create() {
		return axios.post<string>(getActorsUrl(`/`))
	},

	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},

	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},
	
	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}
