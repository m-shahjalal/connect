import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.lead}>Welcome to our family</h1>
			<div className={styles.col}>
				<Link className={styles.link} to='/register'>
					JOIN US TODAY
				</Link>
				<Link className={styles.link} to='/login'>
					Login to your account
				</Link>
			</div>
		</div>
	);
};

export default Home;
