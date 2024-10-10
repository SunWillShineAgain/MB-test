import { IFilterTodos, ITodo } from '../../types'
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
					<li className={styles.todo__list_item} key={item.id}>
						<label>
							<input
								onChange={() => toggleCompletedTodos(item.id)}
								type='checkbox'
								checked={item.completed}
							/>
							<span className={styles.todo__list_fake_input}></span>
							<span className={styles.todo__list_text}>{item.text}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoItems
