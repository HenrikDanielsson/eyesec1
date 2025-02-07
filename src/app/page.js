'use client';
import Image from 'next/image';
import ScrollToTop from '@/components/ScrollToTop';
import ImageCarousel from '@/components/ImageCarousel2';
import { useEffect, useRef, useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
	const contactRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isService, setIsService] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const handleContactClick = () => {
		if (isMobile) {
			window.location.href = 'tel:0812345678';
			return;
		}

		contactRef.current?.scrollIntoView({ behavior: 'smooth' });
		contactRef.current?.classList.add('highlight-section');
		setTimeout(() => {
			contactRef.current?.classList.remove('highlight-section');
		}, 1000);
	};

	const handleServiceClick = () => {
		setIsService(!isService);
	};

	const ButtonGroup = () => (
		<div className="flex items-center justify-center gap-4">
			<button onClick={handleContactClick} className="btn">
				📞 {isMobile ? 'Ring oss' : 'Kontakt'}
			</button>
			<button onClick={handleServiceClick} className="btn">
				🛠️ {isService ? 'Tillbaka' : 'Felanmälan'}
			</button>
		</div>
	);

	return (
		<>
			{/* Add pb-20 class to main container for mobile button spacing */}
			<div className="grid min-h-screen pb-16 md:pb-0 items-start max-w-4xl mx-auto">
				{/* Header Section */}

				{isService && !isMobile && (
					<>
						<div className="flex justify-between items-center p-10">
							<Image
								src="/gfx/logo.png"
								alt="Eyesec Larmteknik AB Logotyp"
								width={100}
								height={38}
								priority
								className="mb-0"
							/>
							<ButtonGroup />
						</div>
					</>
				)}

				{isService && isMobile && (
					<>
						{' '}
						<div className="flex justify-between items-center p-10">
							<Image
								src="/gfx/logo.png"
								alt="Eyesec Larmteknik AB Logotyp"
								width={100}
								height={38}
								priority
								className="mb-0"
							/>
						</div>
					</>
				)}

				{isService && (
					<>
						<div className="flex flex-col items-center px-4 w-full">
							<div className="w-full ">
								<h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
									Felanmälan
								</h1>
								<p className="text-lg sm:text-xl mb-6 text-center">
									Berätta vad som är fel så hjälper vi dig så snabbt vi kan!
								</p>
								<ContactForm />
							</div>
						</div>
					</>
				)}
				{!isService && (
					<>
						<div className="flex items-end justify-center pt-20 pb-8">
							<Image
								src="/gfx/logo.png"
								alt="Eyesec Larmteknik AB Logotyp"
								width={200}
								height={76}
								priority
								className="mb-4"
							/>
						</div>

						{/* Main Content */}
						<div className="flex flex-col items-center md:px-4 w-full">
							<div className="w-full ">
								{/* Hero Section */}

								{!isService && (
									<section className="mb-8 md:mb-12 text-center w-full p-10 md:p-0 ">
										<h1 className="text-2xl sm:text-3xl font-bold mb-4">
											Skydda det som betyder mest med <br />
											Eyesec Larmteknik
										</h1>
										<p className="text-base sm:text-xl mb-6">
											Skräddarsydda säkerhetslösningar för företag och
											privatpersoner
										</p>
									</section>
								)}
								{/* Show buttons here on desktop */}
								{!isMobile && (
									<div className="mb-8">
										<ButtonGroup />
									</div>
								)}

								<section className="w-full bg-section p-8 mb-8 md:mb-12 md:rounded-lg ">
									<p className="text-base sm:text-lg leading-relaxed mb-6">
										<span className="font-semibold">Lite historia:</span>
										<br />
										Eyesec Larmteknik grundades i februari 2000, vi är godkända
										av polis och certifierade av svensk certifiering. Vi är
										medlemmar i installatörsföretagen tidigare EIO sedan 2001.{' '}
									</p>
									<p className="text-base sm:text-lg leading-relaxed mb-6">
										Eyesec består idag av 8 handplockade medarbetare som alla
										har en gedigen erfarenhet inom säkerhetsbranschen. Med
										spetskompetens inom dom flesta idag erkända larm, passer och
										kamera system känner vi oss trygga med att kunna leverera
										precis det Ni behöver.
									</p>
									<ul className="space-y-2 text-base sm:text-lg">
										<li>✅ Certifierad och godkänd säkerhetspartner</li>
										<li>✅ Lösningar för både företag och privatpersoner</li>
										<li>✅ Snabb och pålitlig service</li>
									</ul>
								</section>
								<div className="w-full space-y-8 md:space-y-16 mb-2 md:mb-16">
									<section className="w-full p-0 sm:mx-0 mb-2 text-center">
										<h2 className="text-2xl font-bold mb-6">
											Vi levererar säkerhet till bland andra:
										</h2>
									</section>
									<ImageCarousel className="h-40 w-full mb-0" />
								</div>

								<section className="w-full bg-section p-8 md:rounded-lg mb-8 md:mb-16">
									<h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
										Just nu:
									</h2>
									<p className="text-base sm:text-lg leading-relaxed mb-6">
										Vi har nyligen installerat ett nytt larm- och
										kameraövervakningssystem på en skola i Stockholm. Systemet
										är anpassat för att skydda skolans elever och personal, och
										ger full kontroll över åtkomsten till skolans lokaler.
									</p>
								</section>

								{/* Services Sections */}
								<section className="w-full space-y-8 md:space-y-16 mb-8 md:mb-16">
									<h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-center">
										Våra tjänster
									</h2>

									{/* Service Items */}
									<div className="space-y-8 md:space-y-12 mx-4 md:mx-0">
										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												🔒 Inbrottslarm & Brandsäkerhet
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Skydda ditt hem eller företag med moderna larm och
												brandskyddssystem. Vi erbjuder allt från grundläggande
												larmsystem till avancerade helhetslösningar.
											</p>
											<p className="text-green-700 font-medium">
												💡 Boka en kostnadsfri genomgång av ditt säkerhetsbehov!
											</p>
										</article>

										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												📹 Kameraövervakning
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Få full kontroll med smarta kameror som ger dig
												realtidsbilder direkt i mobilen eller datorn. Vi hjälper
												dig hela vägen – från projektering och installation till
												support och underhåll.
											</p>
											<p className="text-green-700 font-medium">
												🛡️ Se till att alltid ha ögonen på din fastighet!
											</p>
										</article>

										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												🏢 Passagesystem, Lås & Nycklar
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Öka säkerheten och slipp fysiska nycklar med moderna,
												IP-baserade passersystem. Perfekt för företag,
												bostadsrättsföreningar och offentliga lokaler som vill
												ha full kontroll över åtkomsten.
											</p>
											<p className="text-green-700 font-medium">
												🔑 Slipp nyckelkrångel – skaffa ett smart passersystem
												idag!
											</p>
										</article>
										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												💻 Hosting & Datasäkerhet
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Vi tar hand om dina data med våra pålitliga
												hostingtjänster. Med en kombination av automatiserad
												övervakning och erfaren expertis ser vi till att dina
												system alltid har en relevant backup, är uppdaterade och
												driftsäkra.
											</p>
											<p className="text-green-700 font-medium">
												💡 Kontakta oss så berättar vi mer.
											</p>
										</article>
										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												🏠 Digital Tvättstugebokning & Smarta Hem
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Gör vardagen enklare med digital bokning av tvättstuga
												och smarta hem-lösningar. Perfekt för
												bostadsrättsföreningar och fastighetsägare som vill öka
												trivseln och säkerheten.
											</p>
											<p className="text-green-700 font-medium">
												📅 Gör livet enklare – digitalisera din fastighet!
											</p>
										</article>

										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												🚨 Personlarm & Rörelseaktiverat Ljud
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												För riskfyllda miljöer erbjuder vi personlarm som ger
												snabb uppkoppling till larmcentral. Våra
												rörelseaktiverade ljudsystem kan också varna och
												avskräcka obehöriga.
											</p>
											<p className="text-green-700 font-medium">
												⚠️ Skydda din personal med rätt säkerhetslösning!
											</p>
										</article>

										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												🛠️ Säker Drift – Serviceavtal
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Med Säker Drift får du regelbunden service och underhåll
												av dina säkerhetssystem, vilket garanterar att de alltid
												fungerar optimalt.
											</p>
											<p className="text-green-700 font-medium">
												🔧 Trygghet på lång sikt – teckna ett serviceavtal idag!
											</p>
										</article>

										<article className="border-l-4 border-gray-200 pl-4 sm:pl-6">
											<h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
												🔐 Integritet & GDPR
											</h3>
											<p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4">
												Vi tar din integritet på största allvar och följer EU:s
												GDPR-regler. Våra system är designade för att vara
												säkra, pålitliga och följa alla lagkrav.
											</p>
											<p className="text-green-700 font-medium">
												📜 Vi skyddar både din säkerhet och din integritet!
											</p>
										</article>
									</div>
								</section>

								{/* Contact Section */}
								<section
									ref={contactRef}
									className="w-full bg-section p-8 md:rounded-lg mb-0 md:-mb-2"
								>
									<h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
										Kontakta oss
									</h2>
									<p className="mb-6 font-medium">
										Vi hjälper dig hitta rätt säkerhetslösning – hör av dig
										idag!
									</p>
									<div className="grid md:grid-cols-2 gap-8">
										<ul className="space-y-3 md:space-y-4 text-base sm:text-lg">
											<li>
												Svandammsvägen 6<br /> 126 32 Hägersten
											</li>
											<li>📞 08-55670030</li>
											<li>✉️ info@eyesec.se</li>
										</ul>
									</div>
								</section>
							</div>
						</div>
					</>
				)}
			</div>

			{/* Move ScrollToTop above sticky buttons */}
			<ScrollToTop className="top-8" />

			{/* Show sticky buttons only on mobile, remove margin bottom */}
			{isMobile && (
				<div className="sticky-buttons">
					<div className="max-w-4xl mx-auto">
						<ButtonGroup />
					</div>
				</div>
			)}
		</>
	);
}
