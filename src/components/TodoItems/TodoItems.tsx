import { IFilterTodos, ITodo } from '../../types'
import TodoItem from './TodoItem'
import styles from './TodoItems.module.scss'

const TodoItems = ({
	todos,
	filterTodos,
	filter,
	toggleCompletedTodos,
}: {
	todos: ITodo[]
	filterTodos: IFilterTodos
	filter: string
	toggleCompletedTodos: (todoId: number) => void
}) => {
	return (
		<div className='todo__items'>
			<ul className={styles.todo__list}>
				{todos.filter(filterTodos[filter]).map(item => (
					<TodoItem
						key={item.id}
						item={item}
						toggleCompletedTodos={toggleCompletedTodos}
					/>
				))}
			</ul>
		</div>
	)
}

export default TodoItems
