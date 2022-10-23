import { IAnimeImages } from '@/shared/types/anime.types'
import { IMangaImages } from '@/shared/types/manga.types'

interface ICharacterImages {
	jpg: {
		image_url: string
		small_image_url: string
	}
	webp: {
		image_url: string
		small_image_url: string
	}
}

interface IPeopleImages {
	jpg: {
		image_url: string | null
	}
}

interface IAnimeMeta {
	mal_id: number
	url: string
	images: IAnimeImages
	title: string
}

interface IMangaMeta {
	mal_id: number
	url: string
	images: IMangaImages
	title: string
}

interface IPersonMeta {
	mal_id: number
	url: string
	images: IPeopleImages
	name: string
}

export interface ICharacter {
	mal_id: number
	url: string
	images: ICharacterImages
	name: string
	name_kanji: string | null
	nicknames: string[]
	favorites: number
	about: string | null
}

export interface ICharacterFull extends ICharacter {
	anime: {
		role: string
		anime: IAnimeMeta
	}
	manga: {
		role: string
		manga: IMangaMeta
	}
	voices: {
		language: string
		person: IPersonMeta
	}
}
