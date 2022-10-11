import { IAnime, IAnimeFull } from '@/shared/types/anime.types'
import { ApiResponse } from '@/shared/types/api.types'

import { getAnimeUrl } from '@/configs/api.config'

import { axiosInstance } from '../../api/axios'

export const AnimeService = {
	async getFullById(id: number) {
		return axiosInstance.get<ApiResponse<IAnimeFull>>(
			getAnimeUrl(`/${id}/full`)
		)
	},

	async getById(id: number) {
		return axiosInstance.get<ApiResponse<IAnime>>(getAnimeUrl(`/${id}`))
	},
}
