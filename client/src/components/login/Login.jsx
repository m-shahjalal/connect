import styles from './login.module.css';

const Login = () => {
	return (
		<div className={styles.login}>
			<div className={styles.lead}>LOGIN TO CONNECT</div>
			<form className={styles.form}>
				<input
					className={styles.input}
					type='text'
					name='email'
					id='email'
					placeholder='Email'
				/>
				<input
					className={styles.input}
					type='password'
					name='password'
					id='password'
					placeholder='Password'
				/>
				<input className={styles.submit} type='submit' value='Login' />
			</form>
		</div>
	);
};

export default Login;
