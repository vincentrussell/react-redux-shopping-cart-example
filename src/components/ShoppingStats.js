import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroceryItem } from '../actions';
import { removeFromShoppingBag } from '../actions';


class ShoppingStats extends Component {
	render() {
		return (
			<div>
			<h2> Shopping Stats </h2>
			<ul className="list-group">
			  <li className="list-group-item">Cost - ${this.props.stats[0].cost}</li>
			  <li className="list-group-item">Calories - {this.props.stats[0].calories} kcal</li>
			  <li className="list-group-item">Weight - {this.props.stats[0].weight} mg</li>
			</ul>
			</div>
		)
	}
}


function mapStateToProps(state) {
	console.log("calc stats state:", state);
	return {"stats" : [state.stats]};
}


export default connect(mapStateToProps, {addGroceryItem, removeFromShoppingBag}) (ShoppingStats);