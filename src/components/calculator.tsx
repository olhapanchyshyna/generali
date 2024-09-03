'use client'

import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import $ from 'jquery'
import { Montserrat } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['500'], // добавляем нужные веса
})

export default function Calculator() {
	const [months, setMonths] = useState<number>(1)
	const [amount, setAmount] = useState<number>(300)
	const sliderRefMonths = useRef<HTMLInputElement>(null)
	const sliderRefAmount = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (sliderRefMonths.current) {
			$(sliderRefMonths.current).ionRangeSlider({
				skin: 'round',
				type: 'single',
				min: 1,
				max: 12,
				from: months,
				grid: true,
        postfix: " months",
				onChange: (data: any) => {
					setMonths(data.from)
				},
			})
		}

		if (sliderRefAmount.current) {
			$(sliderRefAmount.current).ionRangeSlider({
				skin: 'round',
				type: 'single',
				min: 300,
				max: 15000,
				from: amount,
				grid: true,
				step: 100,
        postfix: " €",
				onChange: (data: any) => {
					setAmount(data.from)
				},
			})
		}
	}, [months, amount]) // Добавляем зависимости, чтобы обновить слайдеры при изменении значений

	// Пример простой формулы расчета (можно заменить на свою логику)
	const calculateProfit = (months: number, amount: number) => {
		return (amount * months) / 2 // Ваша формула
	}

	return (
		<div className='min-[1180px]:px-[32px] px-[25px] pt-[60px] min-[1180px]:pt-[100px] bg-white shadow-md rounded-[20px] max-w-[690px] w-full'>
			<div className='mb-4'>
				<input
					ref={sliderRefMonths}
					type='text'
					name='months'
					// Передаем отформатированное значение для отображения
					value={`${months} month${months > 1 ? 's' : ''}`}
					readOnly
				/>
			</div>
			<div className='mb-4'>
				<input
					ref={sliderRefAmount}
					type='text'
					name='amount'
					// Передаем отформатированное значение для отображения
					value={` ${amount.toLocaleString()} €`}
					readOnly
				/>
			</div>

			<div
				className={`${montserrat.className} mt-[52px] py-[20px] text-center bg-[linear-gradient(90deg,_#C91C04_0%,_#D81E05_33.33%,_#4B0900_66.67%,_#4B0900_100%)] text-white max-w-[500px] w-full m-auto mb-[40px] flex rounded-[38px] justify-center items-center text-[16px] min-[1180px]:text-[20px] leading-[24px]`}
			>
				MOGUĆA DOBIT:
				<p className='text-center min-[1180px]:ml-[15px] ml-[10px] text-[28px] min-[1180px]:text-[44px] leading-[32px]'>
					€ {calculateProfit(months, amount).toFixed(0)}
				</p>
			</div>
		</div>
	)
}
