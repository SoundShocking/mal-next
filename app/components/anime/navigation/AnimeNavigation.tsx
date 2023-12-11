import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, memo } from 'react'

import { IAnimeFull } from '@/shared/types/anime.types'

import styles from './AnimeNavigation.module.scss'

interface Props {
	anime: IAnimeFull
}

const AnimeNavigation: FC<Props> = memo(({ anime }) => {
	const { asPath } = useRouter()

	const navigationRoutes = [
		{
			name: 'Details',
			url: `/anime/${anime.mal_id}`,
		},
		{
			name: 'Characters & Staff',
			url: `/anime/${anime.mal_id}/characters`,
		},
		{
			name: 'Episodes',
			url: `/anime/${anime.mal_id}/episodes`,
		},
		{
			name: 'Stats',
			url: `/anime/${anime.mal_id}/stats`,
		},
		{
			name: 'Stats',
			url: `/anime/${anime.mal_id}/stats`,
		},
		{
			name: 'Reviews',
			url: `/anime/${anime.mal_id}/reviews`,
		},
		{
			name: 'Pictures',
			url: `/anime/${anime.mal_id}/pics`,
		},
	]

	return (
		<div className={styles.navigation}>
			<ul>
				{navigationRoutes.map((route, idx) => (
					<li key={idx}>
						<Link href={route.url}>
							<a className={clsx({ [styles.active]: asPath === route.url })}>
								{route.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
})

export default AnimeNavigation
