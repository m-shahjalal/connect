import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './register.module.css';
import axios from '../../utils/axios';

const Register = () => {
	const initialState = {
		name: '',
		email: '',
		password: '',
		confirm: '',
	};
	const history = useHistory();
	const [values, setValues] = useState(initialState);
	const changeHandler = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		console.log(values);
		axios.post('/users/register', values);
		// setValues(initialState);
		history.push('/login');
	};
	return (
		<div className={styles.register}>
			<div className={styles.lead}>JOIN TODAY</div>
			<form className={styles.form} onSubmit={submitHandler}>
				<input
					className={styles.input}
					type='text'
					name='name'
					id='name'
					placeholder='type your full name'
					value={values.name}
					onChange={changeHandler}
					required
				/>
				<input
					className={styles.input}
					type='text'
					name='email'
					id='email'
					placeholder='Give your email address'
					value={values.email}
					onChange={changeHandler}
					required
				/>
				<input
					className={styles.input}
					type='password'
					name='password'
					id='password'
					placeholder='Write a strong password'
					value={values.password}
					onChange={changeHandler}
					required
				/>
				<input
					className={styles.input}
					type='password'
					name='confirm'
					id='confirm'
					placeholder='Again give your password'
					value={values.confirm}
					onChange={changeHandler}
					required
				/>
				<Link className={styles.link} to='/login'>
					Have already joined?
				</Link>
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
