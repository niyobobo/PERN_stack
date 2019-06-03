import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

class ShoppingList extends Component {
  state = { 
    items: [
      {id: Math.random(), name: 'Eggs'},
      {id: Math.random(), name: 'Milk'},
      {id: Math.random(), name: 'Steak'},
      {id: Math.random(), name: 'Burger'},
    ]
   }
  render() { 
    const { items } = this.state;
    return ( 
      <Container>
        <Button color="dark" style={{marginBottom: '2rem'}}>Add Item</Button>
      </Container>
     );
  }

  addItem = () => {
    const name = prompt('Enter item');
    //if(name)
  }
}
 
export default ShoppingList;