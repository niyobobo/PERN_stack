import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../redux/actions/itemActions';
import PropTypes from 'prop-types'

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button className="remove-btn mr-3" color="danger"
                    size="sm"
                    onClick={() => this.props.deleteItem(id)}
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
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);