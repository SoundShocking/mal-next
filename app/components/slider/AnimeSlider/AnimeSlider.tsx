import Link from 'next/link'
import { FC } from 'react'
import { Lazy, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IAnime } from '@/shared/types/anime.types'

import styles from './AnimeSlider.module.scss'

interface Props {
	title: string
	items: IAnime[]
}

export const AnimeSlider: FC<Props> = ({ title, items }) => {
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
				{items.map((anime, idx) => (
					<SwiperSlide key={anime.mal_id} className={styles.slide}>
						<Link href={`/anime/${anime.mal_id}`}>
							<a className={styles.image}>
								<img
									data-src={anime.images.webp.large_image_url}
									alt={anime.title_english!}
									className="swiper-lazy"
								/>

								<div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>

								<div className={styles.place}>{++idx}</div>
							</a>
						</Link>

						<Link href={`/anime/${anime.mal_id}`}>
							<a className={styles.name}>{anime.title_english}</a>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
