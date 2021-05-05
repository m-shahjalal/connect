import NavList from './NavList';
import styles from './nav.module.css';

const Row = () => {
	return (
		<div className={styles.row}>
			<div className={styles.col}>
				<h1 className={styles.logo}>CONNECT</h1>
			</div>
			<div className={styles.col}>
				<NavList />
			</div>
		</div>
	);
};

export default Row;
