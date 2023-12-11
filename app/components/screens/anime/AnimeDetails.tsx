import Head from 'next/head'
import { FC } from 'react'

import AnimeNavigation from '@/components/anime/navigation/AnimeNavigation'
import AnimeSidebar from '@/components/anime/sidebar/AnimeSidebar'

import { IAnimeFull } from '@/shared/types/anime.types'

import styles from './Anime.module.scss'

export interface IAnimeDetailsProps {
	anime: IAnimeFull
}

const AnimeDetails: FC<IAnimeDetailsProps> = ({ anime }) => {
	return (
		<div className={styles.anime}>
			<Head>
				<title>{anime.title_english}</title>
			</Head>

			<div className="container mx-auto">
				<div className={styles.header}>
					<h1 className={styles.title}>{anime.title_english}</h1>
				</div>

				<div className={styles.gridContent}>
					<div className={styles.left}>
						<AnimeSidebar anime={anime} />
					</div>

					<div className={styles.right}>
						<AnimeNavigation anime={anime} />

						<div className={styles.synopsis}>{anime.synopsis}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnimeDetails
