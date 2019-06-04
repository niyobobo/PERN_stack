import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Steak' },
      { id: uuid(), name: 'Burger' },
    ]
  }
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button color="dark" style={{ marginBottom: '2rem' }}
          onClick={this.addItem}>Add Item</Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button className="remove-btn mr-3" color="danger"
                    size="sm"
                    onClick={() => this.removeItem(id)}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }

  addItem = () => {
    const name = prompt('Enter item');
    if (name) {
      this.setState(state => ({
        items: [...state.items, { id: uuid(), name }]
      }))
    }
  }

  removeItem(id) {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }))
  }
}

export default ShoppingList;