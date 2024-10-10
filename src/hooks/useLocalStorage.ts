import { ITodo } from '../types'

export const useLocalStorage = (todos: ITodo[]) => {
	localStorage.setItem('todos', JSON.stringify(todos))
	// return [value, setValue]
}
