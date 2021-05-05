import { useState, useEffect } from 'react';
import styles from './nav.module.css';
import NavList from './NavList';

const Hamburger = () => {
	const [click, setClick] = useState(false);

	useEffect(() => {
		const clickHandler = () => {
			click && setClick(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	}, [click]);

	return (
		<div className={styles.hamburger}>
			<div className={styles.row}>
				<div className={styles.col}>
					<h1 className={styles.logo}>CONNECT</h1>
				</div>
				<div className={styles.col}>
					<div
						onClick={() => setClick(!click)}
						className={
							click
								? `${styles.menuBtn} ${styles.open}`
								: `${styles.menuBtn}`
						}>
						<div className={styles.menuBtnBurger}></div>
					</div>
				</div>
			</div>
			<div
				className={styles.navItems}
				style={
					click
						? { left: '0', opacity: '1' }
						: { left: '-100%', opacity: '0' }
				}>
				<NavList absolute />
			</div>
		</div>
	);
};

export default Hamburger;
