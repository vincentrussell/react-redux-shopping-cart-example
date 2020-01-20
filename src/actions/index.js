export const ADD_GROCERY = "ADD_GROCERY";
export const REMOVE_FROM_SHOPPING_BAG = "REMOVE_FROM_SHOPPING_BAG";

export function addGroceryItem(item) {
	const action = {
		type: ADD_GROCERY,
		item: item
	}
	return action;
}

export function removeFromShoppingBag(item) {
	const action = {
		type: REMOVE_FROM_SHOPPING_BAG,
		item: item
	}
	return action;
}

export default addGroceryItem;