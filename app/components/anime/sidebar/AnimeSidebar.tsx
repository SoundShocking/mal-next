import { FC } from 'react'

import styles from '@/screens/anime/Anime.module.scss'

import { IAnimeFull } from '@/shared/types/anime.types'

interface Props {
	anime: IAnimeFull
}

const AnimeSidebar: FC<Props> = ({ anime }) => {
	return (
		<>
			<div className={styles.poster}>
				<img
					src={anime.images.webp.large_image_url}
					alt={anime.title_english!}
				/>
			</div>

			<div></div>
		</>
	)
}

export default AnimeSidebar
