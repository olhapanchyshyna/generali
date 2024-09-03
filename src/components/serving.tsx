import Serving1 from 'BASE_URL/public/images/serving-1.svg'
import Serving2 from 'BASE_URL/public/images/serving-2.svg'
import Serving3 from 'BASE_URL/public/images/serving-3.svg'
import { MainTitle } from './main-title'

export default function Serving() {
	return (
		<section className='mt-[90px] px-[18px] pb-[77px]' >
			<MainTitle text='Inizia a servire con noi' />
			<div className='mt-[48px] flex justify-between text-center min-[1180px]:text-start items-center min-[1180px]:items-end flex-col min-[1180px]:flex-row m-auto'>
				<div className='max-w-[360px] w-full mb-[40px]'>
					<Serving1 className='mb-[52px] m-auto min-[1180px]:mb-[52px] ' />
					<MainTitle
						text='Registrazione'
						className='min-[1180px]:text-start mb-[34px] text-[31px]'
					/>
					<div className='min-[1180px]:text-[16px] text-[20px] leading-[22px] text-[#242424] '>
						Compilare tutti i campi del modulo di registrazione sul sito web.
					</div>
					<button className='max-w-[360px] w-full bg-[#D21D05] text-white py-[15px] text-center rounded-[15px] mt-[36px]'>
						INIZIARE
					</button>
				</div>

				<div className='h-[370px] w-[1px] bg-[#EE1B25] min-[1180px]:flex hidden'></div>

				<div className='max-w-[360px] w-full mb-[40px]'>
					<Serving2 className='mb-[52px] m-auto min-[1180px]:mb-[52px]' />
					<MainTitle
						text='Consultazione di esperti'
						className='min-[1180px]:text-start mb-[34px] text-[31px]'
					/>
					<div className='min-[1180px]:text-[16px] text-[20px] leading-[22px] text-[#242424]'>
						Compilare tutti i campi del modulo di registrazione sul sito web.
					</div>
					<button className='max-w-[360px] w-full bg-[#D21D05] text-white py-[15px] text-center rounded-[15px] mt-[36px]'>
						INIZIARE
					</button>
				</div>

				<div className='h-[370px] w-[1px] bg-[#EE1B25] min-[1180px]:flex hidden'></div>

				<div className='max-w-[360px] w-full mb-[40px]'>
					<Serving3 className='mb-[52px] m-auto min-[1180px]:mb-[52px]' />
					<MainTitle
						text='Deposito'
						className='min-[1180px]:text-start mb-[34px] text-[31px]'
					/>
					<div className='min-[1180px]:text-[16px] text-[20px] leading-[22px] text-[#242424]'>
						Compilare tutti i campi del modulo di registrazione sul sito web.
					</div>
					<button className='max-w-[360px] w-full bg-[#D21D05] text-white py-[15px] text-center rounded-[15px] mt-[36px]'>
						INIZIARE
					</button>
				</div>
			</div>
		</section>
	)
}
