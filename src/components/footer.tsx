import LogoIcon from 'BASE_URL/public/images/logo.svg'

export default function Footer() {
	return (
		<footer className='min-[1190px]:border-t-[1px] pt-[15px] min-[1190px]:border-[#CC4238] px-[20px] pb-[43px] min-[1190px]:pb-[65px] min-[1190px]:pt-[36px] min-[1190px]:pl-[76px] min-[1190px]:pr-[45px] flex justify-between flex-col min-[1190px]:flex-row'>
			<LogoIcon className='w-[90px] m-auto min-[1190px]:m-0 order-2 min-[1190px]:order-none' />

			<div className='min-[1190px]:ml-[170px] mt-[11px] order-1 min-[1190px]:order-none '>
				<ul className='text-black justify-center m-auto flex min-[1190px]:justify-end  min-[1190px]:mb-[20px] text-center min-[1190px]:text-end min-[1190px]:flex-row flex-col'>
					<li className='mx-[10px]  leading-[14px] mb-[14px] min-[1190px]:mb-0'>
						<a href='#' className='text-[12px]'>
							Mappa del sito
						</a>
					</li>
					<li className='mx-[10px]  leading-[14px] mb-[14px] min-[1190px]:mb-0'>
						<a href='#' className='text-[12px]'>
							Termini di utilizzo
						</a>
					</li>
					<li className='mx-[10px]  leading-[14px] mb-[14px] min-[1190px]:mb-0'>
						<a href='#' className='text-[12px]'>
							Avviso di accessibilità
						</a>
					</li>
					<li className='mx-[10px]  leading-[14px] mb-[14px] min-[1190px]:mb-0'>
						<a href='#' className='text-[12px]'>
							Gestione dei Cookie
						</a>
					</li>

					<li className='mx-[10px]  leading-[14px] mb-[14px] min-[1190px]:mb-0'>
						<a href='#' className='text-[12px]'>
							Politica sulla protezione dei dati e informativa sulla privacy
						</a>
					</li>
				</ul>
				<ul className='mb-[41px] text-black justify-center m-auto flex min-[1190px]:justify-end text-center min-[1190px]:text-end min-[1190px]:flex-row flex-col'>
					<li className='mx-[10px] leading-[14px] mb-[14px] min-[1190px]:mb-0'>
						<a href='#' className='text-[12px]'>
							Avviso di frode Web e phishing
						</a>
					</li>
					<li className='mx-[10px] leading-[14px] '>
						<a href='#' className='text-[12px]'>
							Politica sui reclami – Australia
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
