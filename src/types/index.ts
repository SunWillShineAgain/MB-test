export interface ITodo {
	id: number
	text: string
	completed: boolean
}

export interface IFilterTodos {
	[key: string]: (todo: ITodo) => boolean
}
