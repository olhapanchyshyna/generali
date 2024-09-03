'use client'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from './ui/sheet'


export default function Sheed() {
	const [isSheetOpen, setIsSheetOpen] = useState(false)
	return (
		<div className='lg:hidden'>
			<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
				<SheetTrigger className='h-[35px] '>
					<HamburgerMenuIcon className='h-[35px] w-[35px]' />
				</SheetTrigger>
				<SheetContent
					onCloseAutoFocus={e => {
						e.preventDefault()
					}}
					side='right'
					className='bg-white flex w-[250px] flex-col justify-between border-none px-[5px] md:w-[300px] md:px-[20px] xl:w-[350px]'
				>
					<div className='mx-[15px] mt-[100px] flex flex-col text-[20px] font-medium uppercase leading-[36px] text-[#fff] md:text-[24px] xl:text-[28px]'>
						<nav className='m-auto text-[20px] leading-[36px] text-[#D21D05]'>
							<ul className='flex  flex-col justify-between'>
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
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
