import { Link } from 'react-router-dom';
import styles from './list.module.css';

const Items = ({ content }) => {
	return (
		<ul className={styles.buddyList}>
			{content &&
				content.map((item) => (
					<li key={Math.random()} className={styles.item}>
						<Link to='#' className={styles.link}>
							<h4 className={styles.name}>{item.name}</h4>
							<p className={styles.msg}>{item.message}</p>
						</Link>
					</li>
				))}
		</ul>
	);
};

export default Items;
