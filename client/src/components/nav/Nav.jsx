import Hamburger from './Hamburger';
import styles from './nav.module.css';
import useWindow from '../../hooks/useWindow';
import Row from './Row';

const Nav = () => {
	const { width } = useWindow();
	return (
		<div className={styles.nav}>
			{width > 768 ? <Row /> : <Hamburger />}
		</div>
	);
};

export default Nav;
