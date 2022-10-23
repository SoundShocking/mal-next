import Link from 'next/link'
import { FC } from 'react'
import { Lazy, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IManga } from '@/shared/types/manga.types'

import styles from './MangaSlider.module.scss'

interface Props {
	title: string
	items: IManga[]
}

export const MangaSlider: FC<Props> = ({ title, items }) => {
	return (
		<div className="container mt-8">
			<h2 className={styles.title}>{title}</h2>
			<Swiper
				slidesPerView={6}
				spaceBetween={15}
				className={styles.slider}
				lazy
				navigation
				modules={[Lazy, Navigation]}
			>
				{items.map((manga, idx) => (
					<SwiperSlide key={manga.mal_id} className={styles.slide}>
						<Link href={`/manga/${manga.mal_id}`}>
							<a className={styles.image}>
								<img
									data-src={manga.images.webp.large_image_url}
									alt={manga.title_english!}
									className="swiper-lazy"
								/>

								<div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>

								<div className={styles.place}>{++idx}</div>
							</a>
						</Link>

						<Link href={`/manga/${manga.mal_id}`}>
							<a className={styles.name}>{manga.title_english}</a>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
