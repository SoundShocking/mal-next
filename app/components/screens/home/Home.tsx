import { FC } from 'react'

import { AnimeSlider } from '@/components/slider/AnimeSlider'
import { CharacterSlider } from '@/components/slider/CharacterSlider'
import { MangaSlider } from '@/components/slider/MangaSlider'

import { IAnime } from '@/shared/types/anime.types'
import { ICharacter } from '@/shared/types/character.types'
import { IManga } from '@/shared/types/manga.types'

export interface IHome {
	mostPopularAnime: IAnime[]
	topCharacters: ICharacter[]
	topManga: IManga[]
}

const Home: FC<IHome> = ({ mostPopularAnime, topCharacters, topManga }) => {
	return (
		<>
			<AnimeSlider title="Most Popular Anime" items={mostPopularAnime} />
			<CharacterSlider title="Top Characters" items={topCharacters} />
			<MangaSlider title="Top Manga" items={topManga} />
		</>
	)
}

export default Home
