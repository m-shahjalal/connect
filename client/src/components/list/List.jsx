import Items from './Items';
import styles from './list.module.css';

const listItems = [
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},

	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
	{
		name: 'sakib',
		message: 'hello what is up buddy!',
	},
];

const List = () => {
	return (
		<div className={styles.list}>
			<div className={styles.lead}>Buddy List</div>
			<div className={styles.column}>
				<Items content={listItems} />
			</div>
		</div>
	);
};

export default List;
