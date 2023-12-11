import { GetServerSideProps, NextPage } from 'next'

import AnimeDetails, { IAnimeDetailsProps } from '@/screens/anime/AnimeDetails'

import { AnimeService } from '@/services/anime/anime.service'

const AnimePage: NextPage<IAnimeDetailsProps> = (props) => {
	return <AnimeDetails {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const {
		data: { data: anime },
	} = await AnimeService.getAnimeFullById(+context.query.id!)

	return {
		props: {
			anime,
		},
	}
}

export default AnimePage
