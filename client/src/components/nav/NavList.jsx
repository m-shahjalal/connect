import { Link } from 'react-router-dom';
import styles from './nav.module.css';

const NavList = ({ absolute }) => {
	return (
		<ul
			className={styles.list}
			style={absolute ? { position: 'absolute' } : {}}>
			<li className={styles.item}>
				<Link to='/' className={styles.link}>
					Dashboard
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/login' className={styles.link}>
					Login
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/register' className={styles.link}>
					Register
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/logout' className={styles.link}>
					Logout
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/chat' className={styles.link}>
					chat list
				</Link>
			</li>
		</ul>
	);
};

export default NavList;
