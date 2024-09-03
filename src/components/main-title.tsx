import { cn } from '@/lib/utils'

type TitleProps = {
	text: string
	className?: string
}

export function MainTitle({ text, className }: TitleProps) {
	return (
		<div className=''>
			<h2
				className={cn(
					`text-[37px] text-center leading-[53px] text-[#000000]`,
					className
				)}
			>
				{text}
			</h2>
		</div>
	)
}
