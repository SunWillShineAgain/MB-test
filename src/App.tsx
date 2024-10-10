import { useEffect, useState } from 'react'
import { IFilterTodos, ITodo } from './types'
import TodoInput from './components/TodoInput/TodoInput'
import TodoItems from './components/TodoItems/TodoItems'
import TodoInfo from './components/TodoInfo/TodoInfo'

function App() {
	const [value, setValue] = useState<string>('')
	const [todos, setTodos] = useState<ITodo[]>(
		JSON.parse(localStorage.getItem('todos') as string) || []
	)
	const [filter, setFilter] = useState<string>('all')

	useEffect(() => {
		setToLS(todos)
	}, [todos])

	const checkEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			if (value.trim()) {
				setTodos([
					...todos,
					{
						id: Math.floor(Math.random() * 1000000),
						text: value,
						completed: false,
					},
				])
			}
			setValue('')
			setToLS(todos)
		}
	}

	const toggleCompletedTodos = (todoId: number) => {
		setTodos(
			todos.map(item => {
				if (item.id !== todoId) return item
				return {
					...item,
					completed: !item.completed,
				}
			})
		)
		setToLS(todos)
	}

	const checkActiveTodos = () => {
		return todos.filter(todo => todo.completed === false).length as number
	}

	const removeCompletedTodos = () => {
		setTodos(todos.filter(todo => todo.completed !== true))
	}

	const setToLS = (todos: ITodo[]) => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	const filterTodos: IFilterTodos = {
		all: () => true,
		active: (todo: ITodo) => !todo.completed,
		completed: (todo: ITodo) => todo.completed,
	}

	return (
		<>
			<div className='wrap'>
				<h1>todos</h1>
				<div className='todos'>
					<TodoInput
						value={value}
						setValue={setValue}
						checkEnterHandler={checkEnterHandler}
					/>

					<TodoItems
						todos={todos}
						filterTodos={filterTodos}
						filter={filter}
						toggleCompletedTodos={toggleCompletedTodos}
					/>

					<TodoInfo
						checkActiveTodos={checkActiveTodos}
						setFilter={setFilter}
						removeCompletedTodos={removeCompletedTodos}
					/>
				</div>
			</div>
		</>
	)
}

export default App
