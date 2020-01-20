import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroceryItem } from '../actions';


class Grocery extends Component {
	render() {
		console.log("grocery props", this.props)
		return (
			<div>
			<h2> Grocery Items </h2>
			<ul className="list-group">
                {this.props.grocery.map((item) => {
 				return (
 				<li key={item.id} className="list-group-item" onClick={()=> this.props.addGroceryItem(item)}>
 				<b>{item.name}</b> - 
 				<span className="badge badge-info">${item.cost}</span> 
 				- <span className="badge badge-warning">{item.calories} kcal</span> 
 				- <span className="badge badge-primary">{item.weight} mg</span>
 				</li>)
              })}
			</ul>
			</div>
		)
	}

}


function mapStateToProps(state) {
	console.log("groceryState:", state);
	let groceries = state.grocery;
	groceries.sort((a, b) => (a.id > b.id) ? 1 : -1)
	return {"grocery" : groceries};
}


export default connect(mapStateToProps, { addGroceryItem }) (Grocery);