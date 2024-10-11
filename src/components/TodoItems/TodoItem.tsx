import { ITodo } from '../../types'
import styles from './TodoItems.module.scss'

const TodoItem = ({
	item,
	toggleCompletedTodos,
}: {
	item: ITodo
	toggleCompletedTodos: (todoId: number) => void
}) => {
	return (
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
	)
}

export default TodoItem
