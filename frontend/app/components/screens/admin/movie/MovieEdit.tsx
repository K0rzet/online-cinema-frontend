import React, { FC } from 'react'
import { IMovieEditInput } from './movie-edit.inrerface'
import { Controller, useForm } from 'react-hook-form'
import { useMovieEdit } from './useMovieEdit'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import generateSlug from '@/utils/string/generateSlug'
import Button from '@/components/ui/form-elements/Button'

import formStyles from '@/ui/form-elements/admin-form.module.scss'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import { useAdminGenres } from './useAdminGenres'
import { useAdminActors } from './useAdminActors'
import dynamic from 'next/dynamic'


const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
}) 

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { data: genres, isLoading: isGenresLoading } = useAdminGenres()
	const { data: actors, isLoading: isActorsLoading } = useAdminActors()

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('title', {
									required: 'title is required',
								})}
								placeholder="Title"
								error={errors.title}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')))
									}}
								/>
							</div>

							<Field
								{...register('parameters.country', {
									required: 'Country is required',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
								placeholder="Duration (min.)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('year', {
									required: 'Year is required',
								})}
								placeholder="Year"
								error={errors.year}
								style={{ width: '31%' }}
							/>
							{/* React select */}

							<Controller
								control={control}
								name="genres"
								render={({
									field,
									fieldState: { error },
								}) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder='Genres'
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one genre!',
								}}
							/>
							<Controller
								control={control}
								name="actors"
								render={({
									field,
									fieldState: { error },
								}) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
										placeholder='Actors'
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one actor!',
								}}
							/>

							<Controller
								control={control}
								name="poster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="movies"
										placeholder="Poster"
									/>
								)}
								rules={{
									required: 'Poster is required!!!',
								}}
							/>

							<Controller
								name="bigPoster"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="movies"
										placeholder="Big Poster"
									/>
								)}
								rules={{
									required: 'Big Poster is required!!!',
								}}
							/>

							<Controller
								name="videoUrl"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="movies"
										placeholder="Video"
										style={{ marginTop: -25 }}
										isNoImage
									/>
								)}
								rules={{
									required: 'Video is required!!!',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
