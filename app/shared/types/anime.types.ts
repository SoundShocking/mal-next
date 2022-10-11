interface IAnimeImages {
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

interface ITrailerBase {
	youtube_id: string
	url: string
	embed_url: string
}

interface ITitle {
	type: string
	title: string
}

type AnimeType = keyof typeof AnimeTypeEnum | null

type AiringStatus =
	| 'Finished Airing'
	| 'Currently Airing'
	| 'Not yet aired'
	| null

export enum AnimeFilterEnum {
	Airing = 'airing',
	Upcoming = 'upcoming',
	ByPopularity = 'bypopularity',
	Favorite = 'favorite',
}

export enum AnimeTypeEnum {
	TV = 'tv',
	Movie = 'movie',
	OVA = 'ova',
	Special = 'special',
	ONA = 'ona',
	Music = 'music',
}

interface IDateRange {
	from: string | null
	to: string | null
	prop: {
		from: {
			day: number | null
			month: number | null
			year: number | null
		}
		to: {
			day: number | null
			month: number | null
			year: number | null
		}
		string: string | null
	}
}

type Rating =
	| 'G - All Ages'
	| 'PG - Children'
	| 'PG-13 - Teens 13 or older'
	| 'R - 17+ (violence & profanity)'
	| 'R+ - Mild Nudity'
	| 'Rx - Hentai'
	| null

type Season = 'summer' | 'winter' | 'spring' | 'fall' | null

interface IBroadcast {
	day: string | null
	time: string | null
	timezone: string | null
	string: string | null
}

interface IMalUrl {
	mal_id: number
	type: string
	name: string
	url: string
}

export interface IAnime {
	mal_id: number
	url: string
	images: IAnimeImages
	trailer: ITrailerBase
	approved: boolean
	titles: ITitle[]
	title: string
	title_english: string | null
	title_japanese: string | null
	title_synonyms: string[]
	type: AnimeType
	source: string | null
	episodes: number | null
	status: AiringStatus
	airing: boolean
	aired: IDateRange
	duration: string | null
	rating: Rating
	score: number | null
	scored_by: number | null
	rank: number | null
	popularity: number | null
	members: number | null
	favorites: number | null
	synopsis: string | null
	background: string | null
	season: Season
	year: number | null
	broadcast: IBroadcast
	producers: IMalUrl[]
	licensors: IMalUrl[]
	studios: IMalUrl[]
	genres: IMalUrl[]
	explicit_genres: IMalUrl[]
	themes: IMalUrl[]
	demographics: IMalUrl[]
}

export interface IAnimeFull extends IAnime {
	relations: {
		relation: string
		entry: IMalUrl[]
	}
	theme: {
		opening: string
		ending: string
	}
	external: { name: string; url: string }[]
	streaming: { name: string; url: string }[]
}
