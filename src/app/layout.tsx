import { Poppins } from 'next/font/google'
import SiteHeader from './(client-components)/(Header)/SiteHeader'
import ClientCommons from './ClientCommons'
import '@/app/globals.css'
import '@/styles/index.scss'
import 'rc-slider/assets/index.css'
import Footer from '@/components/Footer'
import FooterNav from '@/components/FooterNav'
import { Metadata } from 'next'
import ThemeProvider from './theme-provider'
import Footer2 from '@/components/Footer2'
import Footer3 from '@/components/Footer3'
import Footer4 from '@/components/Footer4'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Afrik Ticket - Billetterie en ligne', //Chisfis - Booking online React Next Template
	description: "Afrik Ticket est une plateforme guinéenne de billetterie en ligne, conçue pour simplifier l'achat de billets d'événements et pour soutenir des initiatives caritatives par le financement participatif. Axée sur l’accessibilité, la sécurité et la performance.",
	keywords: 'Afrik Ticket, Billetterie en ligne, Guinée, Événements, Financement participatif, Accessibilité, Sécurité, Performance',
	// viewport:
	// 	'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: any
}) {
	return (
		<html lang="en" className={poppins.className}>
			<ThemeProvider>
				<body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
					<div>
						<SiteHeader />
						{children}
						<FooterNav />

						{/* Chose footer style here!!!! */}
						{/* <Footer /> */}
						<Footer2 />
						{/* <Footer3 /> */}
						{/* <Footer4 /> */}
					</div>

					<ClientCommons />
				</body>
			</ThemeProvider>
		</html>
	)
}