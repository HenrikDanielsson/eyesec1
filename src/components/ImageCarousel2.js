'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageCarousel() {
	const baseImages = [
		{ id: 1, src: '/kunder/ahlens.png', alt: 'Åhlens City Stockholm' },
		{ id: 2, src: '/kunder/akavia.png', alt: 'Akavia' },
		{ id: 3, src: '/kunder/breitling.png', alt: 'Breitling' },
		{ id: 4, src: '/kunder/filadelfia.png', alt: 'Filadelfia Stockholm' },
		{ id: 5, src: '/kunder/jaguar.png', alt: 'Jaguar' },
		{ id: 6, src: '/kunder/webhallen.png', alt: 'Webhallen' },
		{
			id: 7,
			src: '/kunder/riksidrottsforbundet.png',
			alt: 'Riksidrottsförbundet',
		},
	];

	// Duplicate images for seamless scroll
	const images = [...baseImages, ...baseImages];
	const listRef = useRef(null);

	useEffect(() => {
		if (listRef.current) {
			// Calculate the total width of the first set
			const firstSetCount = baseImages.length;
			let width = 0;
			const children = listRef.current.children;
			for (let i = 0; i < firstSetCount; i++) {
				const childRect = children[i].getBoundingClientRect();
				width += childRect.width;
			}
			// Set the CSS custom property for scroll distance
			listRef.current.style.setProperty('--translate-distance', `${width}px`);
		}
	}, [baseImages.length]);

	return (
		<main className="relative w-full h-40 flex flex-col justify-center overflow-hidden">
			{/* Fade overlay vänster (hidden på mobiler) */}
			<div className="hidden z-10 sm:block absolute left-0 top-0 w-20 h-full pointer-events-none bg-gradient-to-r from-[var(--background)] to-transparent" />
			{/* Fade overlay höger (hidden på mobiler) */}
			<div className="hidden z-10 sm:block absolute right-0 top-0 w-20 h-full pointer-events-none bg-gradient-to-l from-[var(--background)] to-transparent" />
			{/* Container med relativ position och 100% bredd */}
			<div className="relative w-full h-full">
				{/* Den animerade listan placeras absolut så att den inte påverkar förälderns beräknade bredd */}
				<ul
					ref={listRef}
					className="absolute top-0 left-0 flex items-center animate-infinite-scroll whitespace-nowrap will-change-transform"
				>
					{images.map((image, idx) => (
						<li
							key={`${image.id}-${idx}`}
							className="inline-block min-w-max min-h-max"
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-40 mx-8 grayscale invert-0 dark:invert object-contain"
							/>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
