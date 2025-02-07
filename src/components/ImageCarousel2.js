'use client';
import { useState, useEffect, useRef } from 'react';
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

	const images = [...baseImages, ...baseImages];

	return (
		<main className="relative h-40 flex flex-col justify-center overflow-hidden">
			<div className="w-full max-w-5xl mx-auto px-4 md:px-6 ">
				<div className="text-center">
					<div
						x-data="{}"
						x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
						className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] rounded-lg"
					>
						<ul
							x-ref="logos"
							className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
						>
							{images.map((image, idx) => (
								<li key={`${image.id}-${idx}`}>
									<Image
										src={image.src}
										alt={image.alt}
										width={200}
										height={150}
										className="grayscale invert-0 dark:invert"
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
