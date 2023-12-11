import { IAnimeImages } from '@/shared/types/anime.types'
import { IMangaImages } from '@/shared/types/manga.types'
import { IPeopleImages } from '@/shared/types/people.types'

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

export interface IAnimeCharacter {
	character: {
		mal_id: number
		url: string
		images: ICharacterImages
		name: string
	}
	role: string
	favorites: number
	voice_actors: {
		person: {
			mal_id: number
			url: string
			images: IPeopleImages
			name: string
		}
		language: string
	}[]
}
