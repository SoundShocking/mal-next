import Head from 'next/head'
import {
	FC,
	MouseEvent,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'

import styles from '@/screens/anime/Anime.module.scss'

import AnimeCharacterLanguages from '@/components/anime/character-languages/AnimeCharacterLanguages'
import { AnimeCharacter } from '@/components/anime/character/AnimeCharacter'
import AnimeNavigation from '@/components/anime/navigation/AnimeNavigation'
import AnimeSidebar from '@/components/anime/sidebar/AnimeSidebar'

import { IAnimeFull, IAnimeStaff } from '@/shared/types/anime.types'
import { IAnimeCharacter } from '@/shared/types/character.types'

import {
	IAnimeCharactersLanguage,
	getAnimeCharactersLanguages,
} from '@/utils/anime/getAnimeCharactersLanguages'

export interface IAnimeCharactersProps {
	anime: IAnimeFull
	characters: IAnimeCharacter[]
	staff: IAnimeStaff[]
}

const AnimeCharacters: FC<IAnimeCharactersProps> = ({ anime, characters }) => {
	const [languages, setLanguages] = useState(() =>
		getAnimeCharactersLanguages(characters)
	)
	const [allLanguagesChecked, setAllLanguagesChecked] = useState(true)

	const onCharactersLanguageChange = useCallback(
		(language: IAnimeCharactersLanguage) => {
			setLanguages(
				languages.map((lang) =>
					lang.name === language.name
						? { ...lang, checked: !lang.checked }
						: lang
				)
			)
		},
		[languages]
	)

	const onAllLanguagesCheckedChange = useCallback(() => {
		setAllLanguagesChecked((prev) => !prev)
	}, [])

	useEffect(() => {
		console.log('all languages checked', allLanguagesChecked)

		if (allLanguagesChecked) {
			setLanguages(languages.map((lang) => ({ ...lang, checked: true })))
		} else {
			setLanguages(languages.map((lang) => ({ ...lang, checked: false })))
		}
	}, [allLanguagesChecked])

	const charactersWithFilteredVoiceActors = useMemo(() => {
		console.log('charactersWithFilteredVoiceActors')

		const activeLanguages = languages
			.filter((language) => language.checked)
			.map((language) => language.name)

		return characters.map((character) => ({
			...character,
			voice_actors: character.voice_actors.filter((actor) =>
				activeLanguages.includes(actor.language)
			),
		}))
	}, [languages])

	return (
		<div className={styles.anime}>
			<Head>
				<title>{anime.title_english}</title>
			</Head>

			<div className="container mx-auto">
				<div className={styles.header} onClick={() => console.log('kek')}>
					<h1 className={styles.title}>{anime.title_english}</h1>
				</div>

				<div className={styles.gridContent}>
					<div className={styles.left}>
						<AnimeSidebar anime={anime} />
					</div>

					<div className={styles.right}>
						<AnimeNavigation anime={anime} />

						<h2 className="text-xl mb-1">Characters & Voice Actors</h2>
						<div className="py-2 flex justify-end border-y">
							<AnimeCharacterLanguages
								languages={languages}
								allLanguagesChecked={allLanguagesChecked}
								onAllLanguagesCheckedChange={onAllLanguagesCheckedChange}
								onCharactersLanguageChange={onCharactersLanguageChange}
							/>
						</div>

						<div className={styles.characters}>
							{charactersWithFilteredVoiceActors.map((character) => (
								<AnimeCharacter
									character={character}
									key={character.character.mal_id}
								/>
							))}
						</div>

						<h2 className="text-xl mb-1">Staff</h2>
						<div className="py-2 flex justify-end border-b"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnimeCharacters
