import {
	AnimeFilterEnum,
	AnimeTypeEnum,
	IAnime,
} from '@/shared/types/anime.types'
import { ApiResponseWithPagination } from '@/shared/types/api.types'
import { ICharacter } from '@/shared/types/character.types'

import { getTopUrl } from '@/configs/api.config'

import { axiosInstance } from '../../api/axios'

type GetTopAnimeParams = {
	page?: number
	limit?: number
	filter?: AnimeFilterEnum
}

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
}
