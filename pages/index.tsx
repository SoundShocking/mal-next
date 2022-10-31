import type { GetStaticProps, NextPage } from 'next'

import Home, { IHome } from '@/screens/home/Home'

import { TopService } from '@/services/top/top.service'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const {
			data: { data: mostPopularAnime },
		} = await TopService.getTopAnime()

		const {
			data: { data: topCharacters },
		} = await TopService.getTopCharacters()

		const {
			data: { data: topManga },
		} = await TopService.getTopManga(1, 25)

		return {
			props: {
				mostPopularAnime,
				topCharacters,
				topManga,
			},
		}
	} catch (error) {
		console.log(error)

		return {
			props: {
				mostPopularAnime: [],
				topCharacters: [],
				topManga: [],
			},
		}
	}
}

export default HomePage
