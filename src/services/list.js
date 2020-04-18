import axios from 'axios';

export const listByCollection = async (collection, next, error) => {
	await axios.get(`/api/${collection}`)
		.then(res => { next(res.data); })
		.catch(function (err) { error(err); });
};