import axios from 'axios';

export const list = async (next, error) => {
	await axios.get('/api/category')
		.then(res => { next(res.data); } )
		.catch(function (err) { error(err); });
};

export const idByName = async (name, next, error) => {
	await axios.get(`/api/category/byname/${name}`)
		.then(res => { next(res.data[0].id); })
		.catch(function (err) { error(err); });
}