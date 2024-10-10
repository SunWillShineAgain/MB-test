import styles from './TodoInfo.module.scss'

const TodoInfo = ({
	checkActiveTodos,
	setFilter,
	removeCompletedTodos,
}: {
	checkActiveTodos: () => number
	setFilter: (arg0: string) => void
	removeCompletedTodos: () => void
}) => {
	return (
		<div className={styles.todos__info}>
			<div className={styles.todos__count}>
				{checkActiveTodos()} {`item${checkActiveTodos() !== 1 ? 's' : ''} left`}
			</div>
			<div className={styles.todos__filters}>
				<label onClick={() => setFilter('all')}>
					All
					<input type='radio' name='filter' />
				</label>
				<label onClick={() => setFilter('active')}>
					Active
					<input type='radio' name='filter' />
				</label>
				<label onClick={() => setFilter('completed')}>
					Completed
					<input type='radio' name='filter' />
				</label>
			</div>
			<div className={styles.todos__clear}>
				<button onClick={removeCompletedTodos}>Clear completed</button>
			</div>
		</div>
	)
}

export default TodoInfo
