import LogoIcon from 'BASE_URL/public/images/logo.svg'
import Sheed from './sheed'

export default function Header() {
	return (
		<header className='pt-[27px] pb-[20px] lg:px-[76px] px-[20px] flex h-[100px] justify-between items-start'>
			<LogoIcon className="w-[90px] lg:absolute "/>
			<Sheed/>
			<nav className='hidden lg:flex m-auto text-[20px] leading-[36px]'>
				<ul className='flex justify-between'>
					<li className='mr-[28px]'>
						<a href='#'>Informazioni</a>
					</li>
					<li className='mr-[28px]'>
						<a href='#'>CEO</a>
					</li>
					<li>
						<a href='#'>Iniziare a guadagnare subito</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
