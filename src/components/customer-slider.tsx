'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'

type Slide = {
	id: number
	image: string
	name: string
	title: string
	mediaIcon: string
	description: string
}

const slides: Slide[] = [
	{
		id: 1,
		image: '/images/customer-1.png',
		name: 'Jeff Bezos',
		title: 'Technologieunternehmer, Investor und Philanthrop',
		mediaIcon: '/images/logos_facebook.png',
		description:
			'Dem Quantencomputing gehört die Zukunft. Ich übertreibe nicht, wenn ich sage, es wird alles verändern wird. Das Quantencomputing steht noch ganz am Anfang; nicht viele Menschen wissen davon, was bedeutet, dass nur sehr wenige es nutzen. Die wenigen, die es nutzen, treffen unglaublich kluge (und profitable) Entscheidungen.',
	},
	{
		id: 2,
		image: '/images/customer-2.png',
		name: 'Bill Gates:',
		title: 'Wirtschaftsmagnat, Investor, Autor, Philanthrop und Menschenfreund',
		mediaIcon: '/images/logos_facebook.png',
		description:
			'Ich weiß mit Sicherheit, dass Elon 3 Milliarden Dollar von seinem eigenen Geld ausgegeben hat, um dieses Programm zu finanzieren. Hut ab vor ihm - das sind 3 Milliarden Dollar von seinem eigenen Geld, um eine bessere Zukunft für alle zu finanzieren und um anderen zu helfen Gewinne zu machen, die ihm dabei helfen werden! Das ist eine Win-Win-Situation, und ich bin sehr gespannt zu sehen, wohin das führen wird.',
	},
	{
		id: 3,
		image: '/images/customer-3.png',
		name: 'Bill Gates:',
		title: 'Wirtschaftsmagnat, Investor, Autor, Philanthrop und Menschenfreund',
		mediaIcon: '/images/logos_facebook.png',
		description:
			'Ich weiß mit Sicherheit, dass Elon 3 Milliarden Dollar von seinem eigenen Geld ausgegeben hat, um dieses Programm zu finanzieren. Hut ab vor ihm - das sind 3 Milliarden Dollar von seinem eigenen Geld, um eine bessere Zukunft für alle zu finanzieren und um anderen zu helfen Gewinne zu machen, die ihm dabei helfen werden! Das ist eine Win-Win-Situation, und ich bin sehr gespannt zu sehen, wohin das führen wird.',
	},
	{
		id: 4,
		image: '/images/customer-4.png',
		name: 'Bill Gates:',
		title: 'Wirtschaftsmagnat, Investor, Autor, Philanthrop und Menschenfreund',
		mediaIcon: '/images/logos_facebook.png',
		description:
			'Ich weiß mit Sicherheit, dass Elon 3 Milliarden Dollar von seinem eigenen Geld ausgegeben hat, um dieses Programm zu finanzieren. Hut ab vor ihm - das sind 3 Milliarden Dollar von seinem eigenen Geld, um eine bessere Zukunft für alle zu finanzieren und um anderen zu helfen Gewinne zu machen, die ihm dabei helfen werden! Das ist eine Win-Win-Situation, und ich bin sehr gespannt zu sehen, wohin das führen wird.',
	},
	{
		id: 5,
		image: '/images/customer-5.png',
		name: 'Bill Gates:',
		title: 'Wirtschaftsmagnat, Investor, Autor, Philanthrop und Menschenfreund',
		mediaIcon: '/images/logos_facebook.png',
		description:
			'Ich weiß mit Sicherheit, dass Elon 3 Milliarden Dollar von seinem eigenen Geld ausgegeben hat, um dieses Programm zu finanzieren. Hut ab vor ihm - das sind 3 Milliarden Dollar von seinem eigenen Geld, um eine bessere Zukunft für alle zu finanzieren und um anderen zu helfen Gewinne zu machen, die ihm dabei helfen werden! Das ist eine Win-Win-Situation, und ich bin sehr gespannt zu sehen, wohin das führen wird.',
	},
]

export default function CustomerSlider() {
	return (
		<section className="bg-[url('/images/customer-slider-bg.png')] bg-cover bg-no-repeat py-[13px] lg:py-[108px]">
			<div className='w-[350px] lg:w-[750px] bg-[#FFFFFF] [box-shadow:0px_5px_10px_0px_#0000001A] m-auto rounded-[10px]'>
				<Carousel
					className='w-full cursor-pointer pt-[30px] pb-[15px] px-[15px] lg:px-[30px] rounded-[10px]'
					opts={{
						align: 'start',
						loop: true,
					}}
				>
					<CarouselContent>
						{slides.map(item => (
							<CarouselItem key={item.id}>
								<div className=''>
									<div className='flex mb-[20px]'>
										<Image
											alt='customer'
											src={item.image}
											width={130}
											height={130}
											className='lg:mr-[37px] mr-[21px] lg:w-[130px] lg:h-[130px] w-[90px] h-[90px]'
										/>
										<div>
											<div className='text-[#00062B] text-[23px] font-medium leading-[35px] mb-[7px]'>
												{item.name}
											</div>
											<div className='text-[#00062B] text-[16px] font-medium leading-[20px] lg:leading-[24px] mb-[4px] max-w-[370px]'>
												{item.title}
											</div>
											<Image
												alt='facebook'
												src={item.mediaIcon}
												width={33}
												height={33}
											/>
										</div>
									</div>
									<Image
										alt='border-icon-slider'
										src='/images/border-icon-slider.png'
										width={15}
										height={15}
										className='absolute mt-[-7px] ml-[55px]'
									/>

									<div className='text-[#00062B] text-[16px] italic leading-[24px] lg:p-[25px] border-t-[1px] border-[#ebebeb85]'>
										{item.description}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}
