import { ADD_GROCERY } from '../actions'
import { REMOVE_FROM_SHOPPING_BAG } from '../actions'

function shoppingBag(state = [], action) {
	let shoppingBag = [];
	switch(action.type) {
		case ADD_GROCERY:
			console.log('shoppingBag Action', action)
			shoppingBag = [...state, action.item];
			console.log("shoppingBag", shoppingBag)
			return shoppingBag;
		case REMOVE_FROM_SHOPPING_BAG:
			console.log('shoppingBag Action', action)
			shoppingBag = state.filter(item=>item.id !== action.item.id);
			console.log("shoppingBag", shoppingBag)
			return shoppingBag;	
		default:
			return state;
	}
}


export default shoppingBag;