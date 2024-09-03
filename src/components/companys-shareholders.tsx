import Image from 'next/image'
import { MainTitle } from './main-title'

export default function CompanyShareholders() {
	return (
		<section className='pt-[29px] md:pt-[72px] pb-[39px] mb:px-0 px-[20px]'>
			<MainTitle
				text="Gli azionisti dell'azienda"
				className='text-[30px] md:text-[37px]'
			/>
			<div className='mt-[54px] flex flex-col justify-between flex-wrap m-auto'>
				<div className='flex justify-between max-w-[800px] w-full m-auto items-center'>
					<Image
						alt='Shareholders'
						src='/images/Shareholders-1.png'
						width={214}
						height={55}
						className='max-w-[127px] md:max-w-[214px] mr-[15px] md:mr-[30px]'
					/>
					<Image
						alt='Shareholders'
						src='/images/Shareholders-2.png'
						width={170}
						height={34}
						className='max-w-[100px] md:max-w-[214px] mr-[15px] md:mr-[30px] md:h-[34px]'
					/>
					<Image
						alt='Shareholders'
						src='/images/Shareholders-3.png'
						width={200}
						height={200}
						className='max-w-[118px] md:max-w-[214px] md:h-[47px]'
					/>
				</div>
				<div className='flex justify-between mt-[35px] max-w-[300px] md:max-w-[490px] w-full m-auto items-center'>
					<Image
						alt='Shareholders'
						src='/images/Shareholders-4.png'
						width={200}
						height={200}
						className='max-w-[60px]  md:max-w-[100px] mr-[30px]'
					/>
					<Image
						alt='Shareholders'
						src='/images/Shareholders-5.png'
						width={209}
						height={200}
						className='max-w-[123px] md:max-w-[220px] mr-[30px] md:h-[32px]'
					/>
					<Image
						alt='Shareholders'
						src='/images/Shareholders-6.png'
						width={200}
						height={200}
						className='max-w-[47px] md:max-w-[80px] mr-[15px]'
					/>
				</div>
			</div>
		</section>
	)
}
