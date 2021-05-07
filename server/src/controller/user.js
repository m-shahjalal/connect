const User = require('../model/User');
const { generateToken } = require('../utils/jwt');
const { generatePassword, comparePassword } = require('../utils/password');

const user = {};

user.getUsers = async (_, res) => res.json(await User.find());

user.loginPost = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		if (!user)
			return res.status(401).json({ error: 'unauthorized credentials' });

		const isValidPass = await comparePassword(password, user.password);
		if (!isValidPass)
			return res.status(401).json({ error: 'unauthorized credentials' });
		const token = await generateToken({ user });
		return res.json({ user, token });
	} catch (error) {
		next(error);
	}
};

user.registerPost = async (req, res, next) => {
	const { name, email, password } = req.body;
	try {
		const pass = await generatePassword(password);
		const user = await User.create({ name, email, password: pass });
		res.json({ message: 'Register successful', user });
	} catch (error) {
		next(error);
	}
};

user.loginGet = (req, res) =>
	res.json({ message: 'provide email and password with request body' });
user.registerGet = (req, res) =>
	res.json({
		message: 'provide name, email and password with request body',
	});

module.exports = user;
