import Image from 'next/image'

export default function Purpose() {
	return (
		<section className='px-[28px] lg:px-[88px] mg:mt-[75px] mt-[54px] flex justify-between items-center '>
			<Image
				alt='form-bg'
				src='/images/purpose-img.png'
				width={485}
				height={600}
				className='max-w-[485] mr-[15px] md:flex hidden'
			/>
			<div className='max-w-[400px] lg:max-w-[480px] md:text-left text-center m-auto'>
				<h5 className='text-[16px] text-[#C22821] leading-[24px]'>IL NOSTRO SCOPO</h5>
				<p className='text-[24px] text-[#0E69AF] leading-[31px]'>Siamo qui per promuovere lo sviluppo e la circolazione delle persone, delle imprese e del Paese.</p>
			</div>
		</section>
	)
}
