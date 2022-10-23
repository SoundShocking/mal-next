import { IDateRange, IMalUrl } from '@/shared/types/anime.types'

export interface IMangaImages {
	jpg: {
		image_url: string
		small_image_url: string
		large_image_url: string
	}
	webp: {
		image_url: string
		small_image_url: string
		large_image_url: string
	}
}

interface ITitle {
	type: string
	title: string
}

type MangaType = keyof typeof MangaTypeEnum | null

type PublishingStatus =
	| 'Finished'
	| 'Publishing'
	| 'On Hiatus'
	| 'Discontinued'
	| 'Not yet published'

export enum MangaFilterEnum {
	Publishing = 'publishing',
	Upcoming = 'upcoming',
	ByPopularity = 'bypopularity',
	Favorite = 'favorite',
}

export enum MangaTypeEnum {
	Manga = 'manga',
	Novel = 'novel',
	LightNovel = 'lightnovel',
	OneShot = 'oneshot',
	Doujinshi = 'doujin',
	Manhua = 'manhua',
	Manhwa = 'manhwa',
	OEL = 'oel',
}

export interface IManga {
	mal_id: string
	url: string
	images: IMangaImages
	approved: boolean
	titles: ITitle[]
	title: string
	title_english: string | null
	title_japanese: string | null
	type: string
	chapters: number | null
	volumes: number | null
	status: PublishingStatus
	publishing: boolean
	published: IDateRange
	score: number | null
	scored_by: number | null
	rank: number | null
	popularity: number | null
	members: number | null
	favorites: number | null
	synopsis: string | null
	background: string | null
	authors: IMalUrl[]
	serializations: IMalUrl[]
	genres: IMalUrl[]
	explicit_genres: IMalUrl[]
	themes: IMalUrl[]
	demographics: IMalUrl[]
}
