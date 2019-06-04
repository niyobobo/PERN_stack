import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addItem } from '../redux/actions/itemActions'
import { Container, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggleModel = () => {
    this.setState({ modal: !this.state.modal });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: uuid(), name: this.state.name}
    this.props.addItem(newItem);
    this.toggleModel();
  }

  render() {
    return (
      <Container>
        <Button
          style={{ marginBottom: '2rem' }}
          color="dark"
          onClick={this.toggleModel}
        >
          Add item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModel}>
          <ModalHeader>Add new item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input type="text" name="name" id="item" placeholder="Add shopping item"
                  onChange={this.onChange}
                />
                <Button
                  color="primary"
                  style={{ marginTop: '1rem' }}
                  block
                  onClick={this.onSubmit}
                >Submit</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
