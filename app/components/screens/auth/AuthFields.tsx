import Field from '@/components/ui/form-elements/Field'
import { validEmail } from '@/shared/regex'
import { FC } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'E-mail is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.password as FieldError | undefined}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should be not less than 6 characters',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password as FieldError | undefined}
			/>
		</>
	)
}

export default AuthFields
