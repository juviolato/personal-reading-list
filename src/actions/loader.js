export const SET_LOADING = 'SET_LOADING';

export const SET_LIST_LOADING = 'SET_LIST_LOADING';
export const setListLoading = isLoading => {
	return { type: SET_LIST_LOADING, value: isLoading };
};

export const SET_MENU_LOADING = 'SET_MENU_LOADING';
export const setMenuLoading = isLoading => {
	return { type: SET_MENU_LOADING, value: isLoading };
}