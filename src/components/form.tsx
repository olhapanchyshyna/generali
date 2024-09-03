'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Определение схемы валидации с использованием Zod
const schema = z.object({
	phone: z
		.string()
		.min(6, 'Phone number is too short')
		.regex(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid'),
	email: z.string().email('Invalid email').nonempty('Email is required'),
	name: z
		.string()
		.min(3, 'Name must be at least 3 characters long')
		.nonempty('Name is required'),
	lastname: z
		.string()
		.min(3, 'Last name must be at least 3 characters long')
		.nonempty('Last name is required'),
})

type FormData = z.infer<typeof schema>

export default function Form() {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		getValues,
		trigger,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const itiRef = useRef<any>(null)

	useEffect(() => {
		const phoneInput = document.querySelector(
			'#phone'
		) as HTMLInputElement | null

		if (phoneInput) {
			itiRef.current = intlTelInput(phoneInput, {
				separateDialCode: true,
				utilsScript:
					'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/js/utils.js',
				initialCountry: 'IT',
        useFullscreenPopup: false,
				geoIpLookup: callback => {
					fetch('https://ipapi.co/json')
						.then(response => response.json())
						.then(data => {
							callback(data.country_code || 'IT')
						})
						.catch(() => callback('IT'))
				},
			})

			const handleInput = (event: Event) => {
				const input = event.target as HTMLInputElement
				const digitsOnly = input.value.replace(/\D/g, '')
				if (digitsOnly.length > 8) {
					input.value = digitsOnly.slice(0, 8)
				}
				setValue('phone', input.value)
				trigger('phone')
			}

			phoneInput.addEventListener('input', handleInput)

			return () => {
				if (itiRef.current) {
					itiRef.current.destroy()
				}
				phoneInput.removeEventListener('input', handleInput)
			}
		}
	}, [setValue, trigger])

	const onSubmit = (data: FormData) => {
		const iti = itiRef.current

		if (iti) {
			const countryCode = iti.getSelectedCountryData().dialCode
			const phoneNumber = getValues('phone')

			const fullPhoneNumber = `+${countryCode}${phoneNumber}`

			console.log({
				...data,
				phone: fullPhoneNumber,
			})
			reset()

			alert('Dati inviati con successo!')
		}
	}

	return (
		<div className='[box-shadow:0px_4px_19.3px_4px_#00000030] md:shadow-none w-[350px] md:w-[300px] lg:w-[354px] h-auto m-auto mt-[79px] rounded-[15px] px-[27px] pt-[52px] pb-[45px] md:bg-[#4A4A4AD1]'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='w-[300px] md:w-[240px] lg:w-[300px] mb-[11px]'>
					<input
						id='name'
						{...register('name')}
						placeholder='Il suo nome'
						className={`text-center  md:text-start w-full p-[9px] border-[1px] rounded-[4px] placeholder:uppercase md:bg-none bg-[#F7F7F7] ${
							errors.name ? 'border-red-500' : 'border-white'
						}`}
					/>
					{/* <div className='min-h-[20px]'>
						{errors.name && (
							<p className='text-red-500 text-xs '>{errors.name.message}</p>
						)}
					</div> */}
				</div>

				<div className='w-[300px] md:w-[240px] lg:w-[300px] mb-[11px]'>
					<input
						id='lastname'
						{...register('lastname')}
						placeholder='Il suo cognome'
						className={`text-center  md:text-start w-full p-[9px] border-[1px] rounded-[4px] placeholder:uppercase md:bg-none bg-[#F7F7F7] ${
							errors.lastname ? 'border-red-500 ' : 'border-white'
						}`}
					/>
					{/* <div className='min-h-[20px]'>
						{errors.lastname && (
							<p className='text-red-500 text-xs '>{errors.lastname.message}</p>
						)}
					</div> */}
				</div>

				<div className='w-[300px] md:w-[240px] lg:w-[300px] mb-[11px]'>
					<input
						id='phone'
						{...register('phone')}
						placeholder='Il suo telefono'
						className={`text-start  w-[300px] md:w-[240px] lg:w-[300px] p-[9px] border-[1px] rounded-[4px] placeholder:uppercase md:bg-none bg-[#F7F7F7] ${
							errors.phone ? 'border-red-500 ' : 'border-white'
						}`}
					/>
					{/* <div className='min-h-[20px]'>
						{errors.phone && (
							<p className='text-red-500 text-xs '>{errors.phone.message}</p>
						)}
					</div> */}
				</div>

				<div className='w-[300px] md:w-[240px] lg:w-[300px]'>
					<input
						id='email'
						{...register('email')}
						placeholder='E-mail'
						className={`text-center  md:text-start w-full p-[9px] border-[1px] rounded-[4px] placeholder:uppercase md:bg-none bg-[#F7F7F7] ${
							errors.email ? 'border-red-500 ' : 'border-white'
						}`}
					/>
					{/* <div className='min-h-[20px]'>
						{errors.email && (
							<p className='text-red-500 text-xs relative'>{errors.email.message}</p>
						)}
					</div> */}
				</div>

				<button
					type='submit'
					className='uppercase mt-[52px] border-[1px] bg-[#D81E05] py-[13px] w-full rounded-[4px] text-white'
				>
					Registrati
				</button>
			</form>
		</div>
	)
}