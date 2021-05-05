import styles from './chat.module.css';

const Message = ({ message }) => {
	const styleA = {
		background: '#F87171',
	};
	const styleB = {
		background: '#43A',
		marginLeft: 'auto',
	};
	return (
		<>
			{message.map((item) => (
				<div
					className={styles.parts}
					style={item.sendId === 'b' ? styleA : styleB}>
					{item.message}
				</div>
			))}
		</>
	);
};

export default Message;
