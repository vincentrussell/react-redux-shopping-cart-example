import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromShoppingBag } from '../actions';


class ShoppingBag extends Component {
	render() {
		console.log("shopping bag props", this.props)
		return (
			<div>
			<h2> Shopping Bag </h2>
			<ul className="list-group">
              {
              	this.props.shoppingBag.map((item) => {
 				return (
 				<li key={item.id} className="list-group-item" onClick={()=> this.props.removeFromShoppingBag(item)}>
 				<b>{item.name}</b> - 
 				<span className="badge badge-info">${item.cost}</span> 
 				- <span className="badge badge-warning">{item.calories} kcal</span> 
 				- <span className="badge badge-primary">{item.weight} mg</span>
 				</li>)
              })
          }
			</ul>
			</div>
		)
	}

}


function mapStateToProps(state) {
	console.log("shopping bag state:", state);
	return {"shoppingBag" : state.shoppingBag};
}


export default connect(mapStateToProps, {removeFromShoppingBag}) (ShoppingBag);