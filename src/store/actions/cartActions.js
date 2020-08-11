import * as actionTypes from '../actionTypes/actionTypes';

export const addItemToCart = item => ({
	type: actionTypes.ADD_ITEM_TO_CART,
	payload: {
		item,
		quantity: 1,
	},
});

export const removeItemFromCart = _id => ({
	type: actionTypes.REMOVE_ITEM_FROM_CART,
	payload: {
		_id,
	},
});

export const changeItemQuantity = (itemId, quantity) => ({
	type: actionTypes.CHANGE_IN_CART_ITEM_QUANTITY,
	payload: {
		itemId,
		quantity,
	},
});

export const changeItemSize = (itemId, size) => ({
	type: actionTypes.CHANGE_IN_CART_ITEM_SIZE,
	payload: {
		itemId,
		size,
	},
});

export const removeAllItemsFromCart = () => ({
	type: actionTypes.EMPTY_CART,
});
