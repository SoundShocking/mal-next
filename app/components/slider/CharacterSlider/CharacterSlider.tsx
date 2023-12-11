import Link from 'next/link'
import { FC } from 'react'
import { Lazy, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ICharacter } from '@/shared/types/character.types'

import styles from './CharacterSlider.module.scss'

interface Props {
	title: string
	items: ICharacter[]
}

export const CharacterSlider: FC<Props> = ({ title, items }) => {
	return (
		<div className="container mx-auto mt-8">
			<h2 className={styles.title}>{title}</h2>

			<Swiper
				slidesPerView={6}
				spaceBetween={15}
				className={styles.slider}
				lazy
				navigation
				modules={[Lazy, Navigation]}
			>
				{items.map((character, idx) => (
					<SwiperSlide key={character.mal_id} className={styles.slide}>
						<Link href={`/character/${character.mal_id}`}>
							<a className={styles.image}>
								<img
									data-src={character.images.webp.image_url}
									alt={character.name}
									className="swiper-lazy"
								/>

								<div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>

								<div className={styles.place}>{++idx}</div>
							</a>
						</Link>

						<Link href={`/character/${character.mal_id}`}>
							<a className={styles.name}>{character.name}</a>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
