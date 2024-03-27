import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { IMovieEditInput } from './movie-edit.inrerface'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { MovieService } from '@/services/movie.service'
import { toastError } from '@/utils/toast-error'
import { getKeys } from '@/utils/object/getKeys'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@/configs/url.config'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()

	const movieId = String(query.id)

	const {isLoading} = useQuery(['movie', movieId], () => MovieService.getById(movieId), {
		onSuccess: ({ data }) => {
			getKeys(data).forEach((key) => {
				setValue(key, data[key])
			})
		},
		onError(error) {
			toastError(error, 'Get movie')
		},
		enabled: !!query.id,
	})

    const {mutateAsync} = useMutation('update movie', (data: IMovieEditInput) => MovieService.update(movieId, data), {
        onError(error) {
			toastError(error, 'Update movie')
		},
        onSuccess() {
            toastr.success('Update movie', 'update was successful')
            push(getAdminUrl('movies'))
        }
    })

    const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
        await mutateAsync(data)
    }

    return {onSubmit, isLoading}
}
