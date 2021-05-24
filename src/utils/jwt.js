const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY || 'this is secret';

const webToken = {};

webToken.generateToken = async (payload) => {
	const token = await jwt.sign(payload, secret, {
		algorithm: 'HS256',
		expiresIn: '2d',
	});
	return token;
};

module.exports = webToken;
