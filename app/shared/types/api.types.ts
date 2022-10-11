interface IPagination {
	last_visible_page: number
	has_next_page: boolean
	items: {
		count: number
		total: number
		per_page: number
	}
}

export type ApiResponse<T = {}> = {
	data: T
}

export type ApiResponseWithPagination<T = {}> = {
	data: T
	pagination: IPagination
}
