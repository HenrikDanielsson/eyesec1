import { Roboto, Oswald } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-roboto',
	display: 'swap',
});

const oswald = Oswald({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-oswald',
});

export const metadata = {
	title:
		'Eyesec Larmteknik AB - Inbrottslarm, brandlarm, passersystem och kameraövervakning',
	description:
		'Försäljning, projektering, installation samt service av inbrottslarm, brandlarm, passersystem och kameraövervakning.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} ${oswald.variable} font-roboto antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
