import { IAnime, IAnimeFull, IAnimeStaff } from '@/shared/types/anime.types'
import { ApiResponse } from '@/shared/types/api.types'
import { IAnimeCharacter } from '@/shared/types/character.types'

import { getAnimeUrl } from '@/configs/api.config'

import { axiosInstance } from '../../api/axios'

export const AnimeService = {
	async getAnimeFullById(id: number) {
		return axiosInstance.get<ApiResponse<IAnimeFull>>(
			getAnimeUrl(`/${id}/full`)
		)
	},

	async getAnimeById(id: number) {
		return axiosInstance.get<ApiResponse<IAnime>>(getAnimeUrl(`/${id}`))
	},

	async getAnimeCharacters(id: number) {
		return axiosInstance.get<ApiResponse<IAnimeCharacter[]>>(
			getAnimeUrl(`/${id}/characters`)
		)
	},

	async getAnimeStaff(id: number) {
		return axiosInstance.get<ApiResponse<IAnimeStaff>>(
			getAnimeUrl(`/${id}/staff`)
		)
	},
}
