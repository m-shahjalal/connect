import styles from './chat.module.css';
// import React, { useState } from 'react';
// import Picker from 'emoji-picker-react';

const Input = () => {
	// const [chosenEmoji, setChosenEmoji] = useState(null);

	// const onEmojiClick = (event, emojiObject) => {
	// 	setChosenEmoji(emojiObject);
	// };

	return (
		<form className={styles.form}>
			<div className={styles.emoji}>
				{/* <Picker onEmojiClick={onEmojiClick} /> */}
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
			</div>
			<input className={styles.input} type='text' name='text' id='text' />
			<button className={styles.button}>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
			</button>
		</form>
	);
};

export default Input;
