import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/itemModal';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

class App extends Component {
  render() { 
    return (
      <Provider store= {store}>
        <div className="App">
          <AppNavbar/> 
          <ItemModal/>
          <ShoppingList/>
        </div>
      </Provider>
     );
  }
}
 
export default App;
