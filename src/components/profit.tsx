import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Calculator from './calculator'
import { MainTitle } from './main-title'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['500'], // добавляем нужные веса
})

export default function Profit() {
	return (
		<section className='bg-[linear-gradient(180deg,_#D81E05_0%,_#490900_100%)] pt-[72px] pb-[51px] px-[22px] min-[1180px]:px-[58px]'>
			<div className='flex justify-end mb-[27px] flex-col items-center min-[1180px]:items-start min-[1180px]:flex-row m-auto'>
				<Image
					alt='customer'
					src='/images/philippe-donnet.png'
					width={460}
					height={460}
					className='min-[1180px]:h-[464px] max-w-[300px] min-[1180px]:max-w-[460px] w-full min-[1180px]:absolute z-10 min-[1180px]:left-[50px] mb-[-40px]'
				/>
				<div className="bg-[url('/images/profit-text-bg.jpg')] bg-cover bg-no-repeat text-white text-[20px] leading-[25px] font-medium max-w-[680px] min-[1180px]:pt-[100px] pt-[46px] px-[30px] pb-[16px] min-[1180px]:pb-[63px] min-[1180px]:pr-[27px] min-[1180px]:pl-[92px] min-[1180px]:mt-[90px]">
					Philippe Donnet, amministratore delegato di Generali, ha appena
					festeggiato dieci anni in Italia e in un’intervista a “Repubblica”
					spiega che bilancio trae dal nostro Paese: “In questi dieci anni il
					mondo ha dovuto fare i conti con prove molto dure e questo ci ha resi
					più capaci di gestire l’imprevedibile. L’Italia ha resistito bene. Per
					quanto mi riguarda, tre anni fa sono diventato cittadino italiano:
					perché ci tenevo a rimarcare un’adesione forte ai valori e alla
					cultura di questo Paese”. Un’altra prova per l’economia è stato il
					repentino rialzo dei tassi: “A mio parere è improprio parlare oggi di
					tassi alti: quando ero teenager, i mutui viaggiavano a due cifre
					percentuali. La vera anomalia è stata vivere con tassi a zero per
					quindici anni. Oggi siamo in una situazione normale. Per quel che
					riguarda il nostro gruppo, abbiamo un business mix grazie al quale
					possiamo crescere in qualsiasi ciclo economico”. La crescita
					dell’Italia è stimata attorno allo 0,7 per cento: “Noi non avremo
					problemi ma per la crescita si può fare meglio, in Italia e in Europa.
					Ritengo che in Europa non ci sia abbastanza Europa, ma troppe tasse e
					troppe norme, che si sovrappongono a quelle nazionali. Questo non
					aiuta né le famiglie né le imprese: quindi abbassiamo le tasse,
					riduciamo le norme e liberiamo le energie imprenditoriali”.
				</div>
			</div>
			<div>
				<MainTitle
					text='Potencijal dobiti'
					className='text-white mb-[40px] font-bold'
				/>
				<div className='flex justify-between flex-col min-[1180px]:flex-row m-auto items-center'>
					<Calculator />
					<div className='mt-[42px] min-[1180px]:mt-0 text-center min-[1180px]:text-start'>
						<div
							className={`${montserrat.className} text-[16px] leading-[20px] text-white font-medium mb-[16px]`}
						>
							UKUPNA DOBIT KORISNIKA:
						</div>
						<div
							className={`${montserrat.className} text-[42px] leading-[56px] text-white font-medium`}
						>
							€ 128 567 000
						</div>
						<div
							className={`${montserrat.className} text-[16px] leading-[20px] text-white font-medium mt-[40px] mb-[16px]`}
						>
							AKTIVNI KORISNICI:
						</div>
						<div
							className={`${montserrat.className} text-[42px] leading-[56px] text-white font-medium`}
						>
							77 335
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
