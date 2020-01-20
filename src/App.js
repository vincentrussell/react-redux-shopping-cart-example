import React from 'react';
import './App.css';
import Grocery from './components/Grocery'
import ShoppingBag from './components/ShoppingBag'
import ShoppingStats from './components/ShoppingStats'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
             Shoppers Stop!
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
             You have $20 to spend on Grocery today.
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <Grocery/>
          </div>
          <div className="col-md-4">
          <ShoppingBag/>
          </div>
          <div className="col-md-4">
          <ShoppingStats/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
