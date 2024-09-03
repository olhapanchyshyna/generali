import Footer from '@/components/footer'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // добавляем нужные веса
})

export const metadata: Metadata = {
	title: 'Generaly',
	description:
		'Siamo qui per promuovere lo sviluppo e la circolazione delle persone, delle imprese e del Paese.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
