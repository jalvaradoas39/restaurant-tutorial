export const setLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = key => {
	return JSON.parse(localStorage.getItem(key));
};

export const deleteLocalStorage = key => {
	localStorage.removeItem(key);
};

export const clearCartLocalStorage = next => {
	deleteLocalStorage('cart');
	deleteLocalStorage('shippingAddress');
	deleteLocalStorage('paymentMethod');

	next();
};
