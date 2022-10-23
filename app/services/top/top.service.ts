import {
	AnimeFilterEnum,
	AnimeTypeEnum,
	IAnime,
} from '@/shared/types/anime.types'
import { ApiResponseWithPagination } from '@/shared/types/api.types'
import { ICharacter } from '@/shared/types/character.types'
import {
	IManga,
	MangaFilterEnum,
	MangaTypeEnum,
} from '@/shared/types/manga.types'

import { getTopUrl } from '@/configs/api.config'

import { axiosInstance } from '../../api/axios'

export const TopService = {
	async getTopAnime(
		page: number = 1,
		limit: number = 10,
		filter: AnimeFilterEnum = AnimeFilterEnum.ByPopularity,
		type?: AnimeTypeEnum
	) {
		return axiosInstance.get<ApiResponseWithPagination<IAnime[]>>(
			getTopUrl(`/anime`),
			{
				params: {
					page,
					limit,
					filter,
					type,
				},
			}
		)
	},

	async getTopManga(
		page: number = 1,
		limit: number = 10,
		filter: MangaFilterEnum = MangaFilterEnum.ByPopularity,
		type?: MangaTypeEnum
	) {
		return axiosInstance.get<ApiResponseWithPagination<IManga>>(
			getTopUrl(`/manga`),
			{
				params: {
					page,
					limit,
					filter,
					type,
				},
			}
		)
	},

	async getTopPeople() {},

	async getTopCharacters(page: number = 1, limit: number = 10) {
		return axiosInstance.get<ApiResponseWithPagination<ICharacter[]>>(
			getTopUrl(`/characters`),
			{
				params: {
					page,
					limit,
				},
			}
		)
	},

	async getTopReviews() {},
}
