import styles from './TodoInput.module.scss'

const TodoInput = ({
	value,
	setValue,
	checkEnterHandler,
}: {
	value: string
	setValue: (arg0: string) => void
	checkEnterHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) => {
	return (
		<div className={styles.input__wrap}>
			<span className={styles.input__icon}></span>
			<input
				placeholder='What needs to be done?'
				className={styles.input}
				value={value}
				onChange={e => setValue(e.target.value)}
				onKeyDown={e => checkEnterHandler(e)}
			/>
		</div>
	)
}

export default TodoInput
