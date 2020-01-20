import { ADD_GROCERY } from '../actions'
import { REMOVE_FROM_SHOPPING_BAG } from '../actions'
import groceryItemsList from '../data/groceryItems.json'


function grocery(state = groceryItemsList, action) {
	let grocery = [];
	switch(action.type) {
		case ADD_GROCERY:
			console.log('add_grocery_click', action)
			grocery = state.filter(item=>item.id !== action.item.id);
			console.log('new grocery_items', grocery)
			return grocery;
		case REMOVE_FROM_SHOPPING_BAG:
			console.log('remove_from_shopping_bag', action)
			grocery = [...state, action.item];
			console.log("new grocery_items", grocery)
			return grocery;	
		default:
			return state;
	}
}


export default grocery;