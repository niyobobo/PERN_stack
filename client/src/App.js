import React, { Component, Fragment } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
     );
  }
}
 
export default App;
