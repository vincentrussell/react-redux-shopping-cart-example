import grocery from './grocery_reducer';
import shoppingBag from './shopping_bag_reducer';
import stats from './stats_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	grocery,
	shoppingBag,
	stats
});


export default rootReducer;