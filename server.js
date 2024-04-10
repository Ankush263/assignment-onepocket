import app from './src/app.js';
import fs from 'fs';

const port = 3000;

const sum = (arr) => {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
};

app.get('/sum', (req, res) => {
	const result = sum([1, 3, 4, 5, 6]);

	res.send({ sum: result });
});

app.get('/count', (req, res) => {
	fs.readFile('data.txt', 'utf8', (err, data) => {
		const words = data.split(/\s+/).filter((word) => word !== '');

		const length = words.length;

		console.log(length);
		res.send({ length });
	});
});

app.get('*', (req, res) => {
	res.send('Hello, World!');
});

app.listen(port, () => {
	console.log(`you are listening to the port ${port}`);
});
