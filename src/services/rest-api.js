import axios from 'axios';

export const restAPI = axios.create({
	baseURL: 'https://personal-reading-list.herokuapp.com/api'
});

export default restAPI;
