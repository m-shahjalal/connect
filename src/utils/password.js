const bcrypt = require('bcrypt');

const password = {};

password.generatePassword = async (password) => {
	const pass = await bcrypt.hash(password, 10);
	if (!pass) throw new Error('could not generate password');
	return pass;
};

password.comparePassword = async (password, hash) => {
	try {
		const pass = await bcrypt.compare(password, hash);
		return pass;
	} catch (error) {
		console.log(error);
		throw new Error('failed to compare password');
	}
};

module.exports = password;
