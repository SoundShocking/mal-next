import { IAnimeCharacter } from '@/shared/types/character.types'

export interface IAnimeCharactersLanguage {
	name: string
	checked: boolean
}

export const getAnimeCharactersLanguages = (
	characters: IAnimeCharacter[]
): IAnimeCharactersLanguage[] => {
	const languages = new Set()

	characters.forEach((character) => {
		character.voice_actors.forEach((actor) => languages.add(actor.language))
	})

	return Array.from(languages).map(
		(language) =>
			({ name: language, checked: true } as IAnimeCharactersLanguage)
	)
}
