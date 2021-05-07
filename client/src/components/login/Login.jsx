import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styles from './login.module.css';
import actions from '../../store/user/action';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(actions.fetchUsers(values));
	};

	useEffect(() => {
		user.email && history.push('/');
	}, [user, history]);

	return (
		<div className={styles.login}>
			<div className={styles.lead}>LOGIN TO CONNECT</div>
			<form className={styles.form} onSubmit={submitHandler}>
				<input
					className={styles.input}
					type='text'
					name='email'
					id='email'
					placeholder='Email'
					value={values.email}
					onChange={changeHandler}
					required
				/>
				<input
					className={styles.input}
					type='password'
					name='password'
					id='password'
					placeholder='Password'
					value={values.password}
					onChange={changeHandler}
					required
				/>

				<Link className={styles.link} to='/register'>
					Don't have an account?
				</Link>
				<input className={styles.submit} type='submit' value='Login' />
			</form>
		</div>
	);
};

export default Login;
