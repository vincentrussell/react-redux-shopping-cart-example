import { ADD_GROCERY } from '../actions'
import { REMOVE_FROM_SHOPPING_BAG } from '../actions'

function stats(state = {cost: 0, calories: 0, weight: 0}, action) {
	let stats = state;
	switch(action.type) {
		case ADD_GROCERY:
		    console.log("calculate_stats_addGrocery", action, state)
		    stats.calories = stats.calories + action.item.calories;
		    stats.cost = stats.cost + action.item.cost;
		    stats.weight = stats.weight + action.item.weight;
		    console.log("new stats", stats);
			return stats;
		case REMOVE_FROM_SHOPPING_BAG:
		    console.log("calculate_stats_removeFromBag", action, state)
		    stats.calories = stats.calories - action.item.calories;
		    stats.cost = stats.cost - action.item.cost;
		    stats.weight = stats.weight - action.item.weight;
		    console.log("new stats", stats);
			return stats;
		default:
			return state;
	}
}


export default stats;