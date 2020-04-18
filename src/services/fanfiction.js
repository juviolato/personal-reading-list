import axios from 'axios';

export const listByCategory = async (category, next, error) => {
	await axios.get(`/api/fanfiction/listbycategory/${category}`)
		.then(res => { next(res.data); })
		.catch(function (err) { error(err); });
}

export const listByCategoryUnsafe = async (category, next, error) => {
	await axios.get(`/api/fanfiction/listbycategory/${category}/unsafe`)
		.then(res => { next(res.data); })
		.catch(function (err) { error(err); });
}