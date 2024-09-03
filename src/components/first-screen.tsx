import Image from 'next/image'
import Form from './form'

export default function FirstScreen() {
	return (
		<section className='mt-[40px] flex justify-between items-center flex-col md:flex-row md:p-0 px-[28px]'>
			<div className='md:text-[28px] text-[24px] text-[#D81E05] max-w-[500px] lg:ml-[150px] md:ml-[50px] text-center md:text-left'>
				Investire 250 euro per raggiungere 5000 euro in una settimana vi sembra
				impossibile? Con il Gruppo Generali potete fare ancora di più!
			</div>
			<Image
				alt='first-screen-mobile'
				src='/images/first-screen-mobile.png'
				width={340}
				height={185}
				className='md:hidden mt-[53px]'
			/>
			
			<div className="md:bg-[url('/images/form-bg.png')] md:bg-cover md:bg-no-repeat lg:h-[536px] max-w-[500px] lg:max-w-[600px] md:pr-[30px] md:pl-[100px] lg:pr-[88px] lg:pl-[150px]">
				<Form />
			</div>
		</section>
	)
}
