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
