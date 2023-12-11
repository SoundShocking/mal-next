import { GetServerSideProps, NextPage } from 'next'

import AnimeCharacters, {
	IAnimeCharactersProps,
} from '@/screens/anime/AnimeCharacters'

import { AnimeService } from '@/services/anime/anime.service'

const AnimeCharactersPage: NextPage<IAnimeCharactersProps> = (props) => {
	return <AnimeCharacters {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const animeId = +context.query.id!

		const {
			data: { data: anime },
		} = await AnimeService.getAnimeFullById(animeId)

		const {
			data: { data: characters },
		} = await AnimeService.getAnimeCharacters(animeId)

		const {
			data: { data: staff },
		} = await AnimeService.getAnimeStaff(animeId)

		return {
			props: {
				anime,
				characters,
				staff,
			},
		}
	} catch (error) {
		console.log(error)

		return {
			props: {
				anime: [],
				characters: [],
				staff: [],
			},
		}
	}
}

export default AnimeCharactersPage
