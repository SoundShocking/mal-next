import Link from 'next/link'
import { FC, memo } from 'react'

import { IAnimeCharacter } from '@/shared/types/character.types'

import styles from './AnimeCharacter.module.scss'

interface Props {
	character: IAnimeCharacter
}

export const AnimeCharacter: FC<Props> = memo(({ character }) => {
	// const filteredVoiceActors = character.voice_actors.filter((actor) =>
	// 	activeLanguages.includes(actor.language)
	// )

	return (
		<div className={styles.character}>
			<div className={styles.image}>
				<Link href={`/character/${character.character.mal_id}`}>
					<a>
						<img
							src={character.character.images.webp.image_url}
							alt={character.character.name}
							loading="lazy"
						/>
					</a>
				</Link>
			</div>

			<div className={styles.information}>
				<div className={styles.name}>
					<Link href={`/character/${character.character.mal_id}`}>
						<a>{character.character.name}</a>
					</Link>
				</div>

				<div className={styles.role}>{character.role}</div>

				<div className={styles.favorites}>{character.favorites} Favorites</div>
			</div>

			<div className={styles.voiceActors}>
				{character.voice_actors.map((actor, idx) => (
					<div key={actor.person.mal_id}>
						<div className={styles.information}>
							<div className={styles.name}>
								<Link href={`/people/${actor.person.mal_id}`}>
									<a>{actor.person.name}</a>
								</Link>
							</div>

							<div className={styles.language}>{actor.language}</div>
						</div>

						<div className={styles.photo}>
							<Link href={`/people/${actor.person.mal_id}`}>
								<a>
									<img
										src={actor.person.images.jpg.image_url!}
										alt={actor.person.name}
										loading="lazy"
									/>
								</a>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
})
