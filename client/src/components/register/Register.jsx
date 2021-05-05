import styles from './register.module.css';
const Register = () => {
	return (
		<div className={styles.register}>
			<div className={styles.lead}>JOIN TODAY</div>
			<form className={styles.form}>
				<input
					className={styles.input}
					type='text'
					name='name'
					id='name'
					placeholder='type your full name'
				/>
				<input
					className={styles.input}
					type='text'
					name='email'
					id='email'
					placeholder='Give your email address'
				/>
				<input
					className={styles.input}
					type='password'
					name='password'
					id='password'
					placeholder='Write a strong password'
				/>
				<input
					className={styles.input}
					type='password'
					name='confirm'
					id='confirm'
					placeholder='Again give your password'
				/>
				<input
					className={styles.submit}
					type='submit'
					value='join now'
				/>
			</form>
		</div>
	);
};

export default Register;
